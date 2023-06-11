import React from 'react';
import titleImg from "../../../assets/home/img/floral-decor@2x.png"
import { useQuery } from '@tanstack/react-query';

const PopularClasses = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch("http://localhost:4000/classes");
            return res.json()
        }
    })
    
    return (
        <div className='bg-[#F5F0E2] py-10 md:py-24'>
            <div className="w-1/2 mx-auto text-center">
                <h1 className="text-4xl font-bold uppercase">Popular classes</h1>
                <div className="flex items-center justify-center mt-4">
                    <span className="me-1">======================== </span>
                    <img src={titleImg} alt="img" className="w-[80px]" />
                    <span className="ms-1"> ========================</span>
                </div>
                <p className="my-6">We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.
                </p>
            </div>
            <div className="mt-12 md:w-[90%] mx-auto grid grid-cols-3 gap-4">
                {
                    classes.map(classItem => 
                        <div key={classItem._id} className='border-[10px] border-white shadow'>
                            <img src={classItem.image} alt="Popular class Image" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularClasses;