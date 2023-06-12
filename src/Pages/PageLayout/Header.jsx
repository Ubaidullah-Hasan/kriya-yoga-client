import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import userIcon from "../../assets/userIcon.png"
import { FiMenu } from "react-icons/fi";



const Header = () => {
    const [navMenu, serNavMenu] = useState(false)
    console.log(navMenu)

    const { user, logOut } = useContext(AuthContext);
    const userPhoto = user?.photoURL;

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("Log Out Successfull!"))
    }

    const menu = <>
        <li className='cursor-pointer'><Link to="/">Home</Link></li>
        <li className='cursor-pointer'><Link to="/instructors">Instructors</Link></li>
        <li className='cursor-pointer'><Link to="/classes">Classes</Link></li>
        {user?.email ?
            <>
                <li className='cursor-pointer'><Link to="/dashboard">Dashboard</Link></li>
                <li onClick={handleLogOut} className='cursor-pointer'>Log Out</li>
                <li><img src={userPhoto ? userPhoto : userIcon} alt="" className='w-7 h-7 rounded-full' /></li>
            </> :
            <>
                <li className='cursor-pointer'><Link to="/login">Login</Link></li>
                <li className='cursor-pointer'><Link to="/register">Register</Link></li>
            </>

        }

    </>

    return (
        <>
            {/* for mobile */}
            <header className='md:hidden h-[70px] bg-[#7E8446]'>
                <div className='flex justify-between items-center px-8 py-2'>
                    <div className='w-[60px]'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className=''>
                        <FiMenu onClick={()=>serNavMenu(!navMenu)} className='w-8 h-8'/>
                    </div>
                </div>
                <div className={`relative duration-500 bg-white px-11 py-4 z-20 ${navMenu ? 'block' : "hidden"}`}>
                    <ul >
                        {menu}
                    </ul>
                </div>
            </header>





            {/* for pc */}
            <header className='bg-[#7E8446] hidden md:block'>
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
        </>
    );
};

export default Header;