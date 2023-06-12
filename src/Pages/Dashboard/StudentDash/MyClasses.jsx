import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("access-token")

    const [myClasses, setmyClasses] = useState([]);

    useEffect(() => {
        axios.get(`https://yoga-steel.vercel.app/payment/${user?.email}`, {
            headers: {
                autorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setmyClasses(response.data);
            })

    }, [user?.email])
    console.log(myClasses)

    // const [classes, setClasses] = useState([]);
    // useEffect(() => {
    //     axios.get('https://yoga-steel.vercel.app/classes')
    //         .then(response => {
    //             // console.log(response.data);
    //             setClasses(response.data);
    //         })
    // }, [])
    // console.log(classes)


    // const [allMyClasses, setAllMyClasses] = useState([]);
    // useEffect(() => {
    //     const accumulatedClasses = [];

    //     myClasses.forEach((obj) => {
    //         obj.cartItems.forEach((item) => {
    //             console.log(item);
    //             accumulatedClasses.push(item)
    //             const clss = classes.filter(cl => console.log("id",cl._id, "ietm", item) )
    //             console.log(clss)
    //         });
    //     });


    //     setAllMyClasses(accumulatedClasses);
    // }, [myClasses, classes]);
    // console.log(allMyClasses);





    return (
        <div className="bg-[#F1E8D1]">
            <div className='grid grid-cols-3 md:w-[90%] mx-auto gap-4 py-10 md:py-24'>
                {
                    myClasses.map(classItem => <div key={classItem._id}>
                        <div className=" bg-base-100">
                            <figure className='relative'>
                                <img src={classItem.image} alt="Shoes" className='h-[220px] w-full' />
                                <span className='absolute top-4 right-5 hover:bg-[#ee4d34] bg-[#7E8446] px-6 py-1 text-white rounded-full'>${classItem.totalPrice}</span>
                            </figure>
                            <div className={`card-body `}>
                                <h2 className="card-title">
                                    {classItem?.email}
                                </h2>
                                <div className="card-actions justify-between">
                                    <div className="">All Item: {classItem.itemsName.map(li => <li key={li._id} className='block'>{li}</li>)}</div>

                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClasses;



