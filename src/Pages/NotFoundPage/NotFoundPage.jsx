import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1, {replace: true});
    }
    return (
        <div>
            <div className='w-[80%] md:w-1/2 mx-auto h-full text-center md:mt-8 mt-[30%]'>
                <img src='https://i.ibb.co/99ywNqm/no-Found-Page.jpg' alt="Image" />
                <button className='bg-[#54452F] hover:bg-[#D4AC75] text-white btn px-7 uppercase' onClick={handleBack}>back</button>
            </div>
        </div>
    );
};

export default NotFoundPage;




