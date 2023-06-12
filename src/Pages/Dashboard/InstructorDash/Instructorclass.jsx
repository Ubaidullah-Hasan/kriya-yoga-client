import React from 'react';
import useUser from '../../../Hook/useUser';
import useClasses from '../../../Hook/useClasses';
import { useQuery } from '@tanstack/react-query';

const Instructorclass = () => {
    const [, , , currentUser] = useUser()
    const token = localStorage.getItem("access-token");


    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', currentUser?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/classes/${currentUser?.email}`, {
                headers: {
                    autorization: `bearer ${token}`
                }
            })
            return response.json()
        }
    });
    console.log(classes)

    

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
                                    <div className="badge ms-auto badge-outline bg-green-500 text-white uppercase">{classItem.status || "pending"}</div>
                                </h2>
                                
                                <div className='flex justify-between my-2'>
                                    <div className="badge badge-outline ">Instructor: {classItem.instructor}</div>
                                    <div className="badge badge-outline bg-primary text-white cursor-pointer">Update</div>
                                </div>
                               
                                <div className="card-actions justify-between">                                    
                                    <div className="badge badge-outline bg-rose-500 text-white">Seats: {classItem.availableSeats}</div>
                                    <div className="badge badge-outline bg-rose-500 text-white">Student: {classItem.studentsCount}</div>
                                    <div className="badge badge-outline bg-primary text-white cursor-pointer">Feedback</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructorclass;