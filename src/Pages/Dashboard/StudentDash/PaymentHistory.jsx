import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const PaymentHistory = () => {
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
    return (
        <div className="bg-[#F1E8D1]">
            <div className='grid grid-cols-3 md:w-[90%] mx-auto gap-4 py-10 md:py-24'>
                {
                    myClasses.map((classItem, index) => <div key={index + 1}>
                        <div className=" bg-blue-100">{console.log(index)}
                            <div className={`card-body `}>
                                <div className='flex justify-between'>
                                    <div className='badge badge-outline bg-rose-500 text-white'>{classItem.date.slice(0, 10)}</div>
                                    <div className='badge badge-outline bg-green-500 text-white'>${classItem.totalPrice}</div>
                                </div>
                                <h2 className="card-title">
                                    {classItem?.email}
                                </h2>
                                <div className="card-actions justify-between">
                                    <div className=""><span className='text-lg underline font-bold'>All Item:</span> {classItem.itemsName.map(li => <li key={li._id} className='block'>{li}</li>)}</div>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PaymentHistory;