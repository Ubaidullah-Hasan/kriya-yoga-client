import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/classes')
            .then(response => {
                console.log(response.data);
                setClasses(response.data);
            })
    }, [])
    console.log(classes)

    return (
        <div className="bg-[#F1E8D1]">
            <div className='grid grid-cols-3 md:w-[90%] mx-auto gap-4 py-10 md:py-24'>
                {
                    classes.map(classItem => <div key={classItem._id}>
                        <div className=" bg-base-100">
                            <figure className='relative'>
                                <img src={classItem.image} alt="Shoes" />
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
                                <button disabled={classItem.availableSeats === 0} className='mt-4 btn hover:bg-[#ee4d34] bg-[#7E8446] text-white'>Select</button> {/* todo: instructor, admin hole button disabled hobe */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;