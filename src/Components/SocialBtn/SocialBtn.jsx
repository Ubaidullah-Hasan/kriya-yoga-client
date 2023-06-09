import React from 'react';
import { FaGoogle } from "react-icons/fa";


const SocialBtn = () => {
    return (
        <button className="cus-btn mx-auto text-white  mt-4 rounded-full w-11 h-11 flex justify-center items-center" >
            <FaGoogle />
        </button>
    );
};

export default SocialBtn;