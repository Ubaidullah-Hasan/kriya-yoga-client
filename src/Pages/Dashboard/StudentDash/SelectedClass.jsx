import React, { useEffect, useState } from 'react';
import useUser from '../../../Hook/useUser';
import { useQuery } from '@tanstack/react-query';

const SelectedClass = () => {
    const [, , , currentUser] = useUser()
    // console.log(currentUser?.email)
    const token = localStorage.getItem("access-token");
    

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', currentUser?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/select-cources/${currentUser?.email}`, {
                headers: {
                    autorization: `bearer ${token}`
                }
            })
            return response.json()
        }
    });
    // console.log(classes)


    const handleDelete = (id) => {
        console.log(id)

        fetch(`http://localhost:4000/select-cources/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }



    return (
        <div className='w-[90%] mx-auto'>
            <div className="overflow-x-auto">
                <div className='flex items-center justify-evenly my-14'>
                    <h1 className='text-4xl uppercase'>Total Amount: ${"45"}</h1>
                    <button className='btn bg-orange-500 px-10 font-bold'>PAY</button>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available seats</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(cource =>
                                <tr key={cource._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cource.image} alt="class image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cource.name}</div>
                                                <div className="text-sm opacity-50">{cource.instructor}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='text-end text-orange-500 w-[70px]'>
                                            ${cource.price}
                                        </div>
                                    </td>
                                    <td className='text-green-500'>
                                        {cource.availableSeats}
                                    </td>

                                    <th>
                                        <button onClick={() => handleDelete(cource._id)} className="btn bg-rose-500 hover:bg-rose-600 text-white btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;



