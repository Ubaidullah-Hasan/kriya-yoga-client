import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Header = () => {
    // , ,  and User profile picture.The user profile picture and Dashboard on the navbar are conditional.If the user is signed in, the navbar will show the profile picture; otherwise, it will show the Login button.

    const { user } = useState('');
    const menu = <>
        <li className='cursor-pointer'><Link to="/">Home</Link></li>
        <li className='cursor-pointer'><Link to="/instructors">Instructors</Link></li>
        <li className='cursor-pointer'><Link to="/classes">Classes</Link></li>
        <li className='cursor-pointer'><Link to="/login">Login</Link></li>
        <li className='cursor-pointer'><Link to="/register">Register</Link></li>
        {
            <li className='cursor-pointer'><Link to="/dashboard">Dashboard</Link></li>
        }
    </>

    return (
        <header className='bg-[#7E8446]'>
            <div className="container w-[90%] h-[90px] mx-auto flex justify-between items-center" >
                <div className='w-[70px]'>
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <ul className="flex space-x-4 text-white">
                        {menu}
                    </ul>
                </nav>

                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-white text-xl" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white text-xl" />
                    </a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-white text-xl" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;