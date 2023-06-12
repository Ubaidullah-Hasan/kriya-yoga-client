import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Manageclass = () => {
    const { user } = useContext(AuthContext);
    const { data: classes = [], refetch, isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch("http://localhost:4000/classes");
            return res.json()
        }
    })
    console.log(classes)

    const handleApprove = (item, text) => {
        const status = {status:text};
        console.log(status);
        fetch(`http://localhost:4000/classes/${item}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount){
                alert("Update Data!!")
            }
        })
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
                                <span className='absolute top-4 left-5 bg-green-500 px-6 py-1 text-white rounded-full'>${classItem?.status || "no status"}</span>
                            </figure>
                            <div className={`card-body ${classItem.availableSeats === 0 ? 'bg-rose-300' : 'bg-white'}`}>
                                <div className="rounded-full px-4 py-1 bg-black text-white">
                                    {classItem?.email || "demo1568742@email.com"}
                                </div>
                                <h2 className="card-title">
                                    {classItem?.name}
                                </h2>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline ">Instructor: {classItem.instructor}</div>
                                    <div className="badge badge-outline bg-rose-500 text-white">Seats: {classItem.availableSeats}</div>
                                </div>
                                <div className="btn-group mt-3 w-full">

                                    <button disabled={classItem?.status === "pending"} className="btn btn-sm bg-green-500">Pending</button>

                                    <button onClick={() => handleApprove(classItem._id, "approve")} disabled={classItem?.status === "approve"} className="btn btn-sm bg-green-500">Approve</button>

                                    <button onClick={() => handleApprove(classItem._id, "deny")} disabled={classItem?.status === "deny"} className="btn btn-sm bg-green-500">Deny</button>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manageclass;