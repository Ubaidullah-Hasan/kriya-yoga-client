import { useQuery } from '@tanstack/react-query';
import React from 'react';
import titleImg from "../../../assets/home/img/floral-decor@2x.png"


const Instructor = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch("https://yoga-steel.vercel.app/instructors-img")
            return res.json()
        }
    })
    // console.log(instructors)

    return (
        <div className='bg-[#F5F0E2] py-10 md:py-24'>
            <div className="w-[80%] md:w-1/2 mx-auto text-center">
                <h1 className="text-2xl md:text-4xl font-bold uppercase">Popular Instructor</h1>
                <div className="flex items-center justify-center mt-4">
                    <span className="me-1 hidden md:block">======================== </span>
                    <img src={titleImg} alt="img" className="w-[80px]" />
                    <span className="me-1 hidden md:block">======================== </span>
                </div>
                <p className="my-3 md:my-6">We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.
                </p>
            </div>
            <div className="mt-12 w-[90%] mx-auto grid md:grid-cols-3 gap-4">
                {
                    instructors.map(classItem =>
                        <div key={classItem._id} className='border-[10px] border-white shadow'>
                            <img src={classItem.image} alt="Popular class Image" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructor;