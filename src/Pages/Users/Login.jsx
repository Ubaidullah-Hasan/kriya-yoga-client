import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-12 md:my-12">
                <div className='border rounded-md w-[90%] md:w-[35%] py-12 px-6 md:px-10  md:shadow-md'>
                    <h2 className="text-2xl font-bold mb-4 text-center uppercase">Login</h2>
                    <form >
                        <div className="mb-4">
                            <label className="block mb-1">Email:</label>
                            <input type="email" name='email' className="border border-gray-300 p-2 w-full rounded" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password:</label>
                            <input type="password" name='password' className="border border-gray-300 p-2 w-full rounded" placeholder="Enter your password" />
                        </div>
                        <button className="cus-btn uppercase text-white py-2 px-4 rounded w-full" type="submit">
                            Login
                        </button>
                    </form>
                    <div className="mt-4">
                        Don't have an account? <Link className="text-blue-500" to="/register">Register</Link>
                    </div>

                    <button className="cus-btn mx-auto text-white  mt-4 rounded-full w-11 h-11 flex justify-center items-center" >
                        <FaGoogle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;