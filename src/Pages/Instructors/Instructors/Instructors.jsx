import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/instructors')
            .then(response => {
                console.log(response.data);
                setInstructors(response.data);
            })
    }, [])
    console.log(instructors)

    return (
        <>
            <div className="bg-[#F1E8D1]">
                <div className='grid grid-cols-3 md:w-[90%] mx-auto gap-4 py-10 md:py-24'>
                    {
                        instructors.map(instructor => <div key={instructor._id}>
                            <div className=" bg-base-100">
                                <figure><img src={instructor.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {instructor?.name}
                                        <div data-tooltip-content="Total Students" data-tooltip-id="badge" className="badge badge-secondary">{instructor.totalStudents}</div>
                                        <Tooltip id="badge" />
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Instructors;