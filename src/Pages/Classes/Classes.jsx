import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useUser from '../../Hook/useUser';


const Classes = () => {

    const token = localStorage.getItem("access-token");

    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [, , , currentUser] = useUser(); console.log(currentUser?.email)
    const email = currentUser?.email;
    useEffect(() => {
        axios.get('https://yoga-steel.vercel.app/classes')
            .then(response => {
                // console.log(response.data);
                setClasses(response.data);
            })
    }, [])
    // console.log(classes)


    const handleSelect = (item) => {
        const cource = { email, courseId: item?._id, name: item?.name, instructor: item?.instructor, price: item?.price, availableSeats: item?.availableSeats, totalEnroll: item?.studentsCount, image: item.image, studentsCount: item?.studentsCount };

        if (!email) {
            console.log()
            Swal.fire({
                title: 'Login Now!',
                text: "Without login you can't access this servicess.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            })
        }

        else {
            axios.post('https://yoga-steel.vercel.app/select-cources', cource, {
                headers: {
                    autorization: `Bearer ${token}`,
                }
            }
            )
                .then(response => {
                    // Handle success
                    console.log(response.data);
                    if (response.data.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'You clicked the button!',
                            'success'
                        )
                    }
                })
        }
    }

    return (
        <div className="bg-[#F1E8D1]">
            <div className='grid grid-cols-3 md:w-[90%] mx-auto gap-4 py-10 md:py-24'>
                {
                    classes.map(classItem => <div key={classItem._id}>
                        <div className=" bg-base-100">
                            <figure className='relative'>
                                <img src={classItem.image} alt="Shoes" className='h-[220px] w-full' />
                                <span className='absolute top-4 right-5 hover:bg-[#ee4d34] bg-[#7E8446] px-6 py-1 text-white rounded-full'>${classItem.price}</span>
                            </figure>
                            <div className={`card-body ${classItem.availableSeats === 0 ? 'bg-rose-300' : 'bg-white'}`}>
                                <h2 className="card-title">
                                    {classItem?.name}
                                </h2>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline ">Instructor: {classItem.instructor}</div>
                                    <div className="badge badge-outline bg-rose-500 text-white">Seats: {classItem.availableSeats}</div>
                                </div>
                                <button onClick={() => handleSelect(classItem)} disabled={classItem.availableSeats === 0 || currentUser?.rule === "admin" || currentUser?.rule === "instructor"} className='mt-4 btn hover:bg-[#ee4d34] bg-[#7E8446] text-white'>Select</button> {/* todo: instructor, admin hole button disabled hobe */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;