import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Header = () => {
    const { user } = useState('');
    const menu = <>
        <li className='cursor-pointer'><Link to="/">Home</Link></li>
        <li className='cursor-pointer'><Link to="/alltoys">All Toys</Link></li>
        {
            user?.email && <>
                <li className='cursor-pointer'><Link to='/mytoys'>My Toys</Link></li>
                <li className='cursor-pointer'><Link to='/addToy'> Add A Toy</Link></li>
            </>
        }
        <li className='cursor-pointer'><Link to='/blogs'>Blogs</Link></li>
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