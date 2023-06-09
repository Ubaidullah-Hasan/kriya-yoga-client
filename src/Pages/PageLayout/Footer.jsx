import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png"


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="bg-[#D4AC75] ">
                    <div className="container mx-auto px-4 w-[90%]">
                        <div className="md:flex gap-10 justify-between items-center py-12 ">
                            <div className=" md:w-[40%] mb-4 text-center">
                                <img src={logo} alt="Logo" className="mx-auto w-[90px]" />
                                <p className='text-white mt-5 md:mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit esse soluta consequuntur porro debitis sunt explicabo! Repudiandae magni quasi, at assumenda culpa ex nam, quos neque, et delectus deserunt!</p>
                                <div className="flex space-x-4 md:w-[25%] items-center mt-5 md:mt-10 mx-auto justify-center">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                                        <FaFacebook />
                                    </a>
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                                        <FaYoutube />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>

                            <div className='md:w-[40%] '>
                                <form className="md:shadow-lg border rounded-lg px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <input
                                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <textarea
                                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                            rows="4"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <button className="hover:bg-[#54452F] bg-blue-700 text-white uppercase py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#54452F]'>
                    <div className='container mx-auto px-4 w-[90%]'>
                        <div className='md:flex justify-between gap-12 py-6'>
                            <p className="text-white">&copy; 2023 Your Company. All rights reserved.</p>
                            <p className='text-white hidden md:blok'>||</p>
                            <p className="text-white">123 Street, City, State, ZIP Code</p>
                            <nav>
                                <ul className="space-x-3 flex">
                                    <li>
                                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;