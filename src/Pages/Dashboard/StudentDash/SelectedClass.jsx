import React from 'react';
import { Link } from 'react-router-dom';
import useClasses from '../../../Hook/useClasses';

const SelectedClass = () => {

    const [classes, refetch, totalPrice] = useClasses();


    const handleDelete = (id) => {
        console.log(id)

        fetch(`https://yoga-steel.vercel.app/select-cources/${id}`, {
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
                    <h1 className='text-4xl uppercase'>Total Amount: <span className='text-orange-500'>${totalPrice}</span></h1>
                    <Link to="/dashboard/payment"><button disabled={totalPrice === 0} className='btn btn-primary px-10 font-bold'>PAY</button></Link>
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



