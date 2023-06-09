import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import SocialBtn from '../../Components/SocialBtn/SocialBtn';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validatePassword = (value) => {
        // Password validation rules
        if (value.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        if (!/[A-Z]/.test(value)) {
            return 'Password must contain at least one capital letter';
        }
        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)) {
            return 'Password must contain at least one special character';
        }
        return true;
    };

    return (
        <div className="flex justify-center items-center my-12 md:my-12">
            <div className='border rounded-md w-[90%] md:w-[35%] py-12 px-6 md:px-10  md:shadow-md'>
                <h2 className="text-2xl font-bold mb-4 text-center uppercase">Register</h2>
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <div>
                        <label className="block mb-1">Name*</label>
                        <input
                            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                            type="text"
                            {...register('name', { required: true })}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Email*</label>
                        <input
                            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                            type="email"
                            {...register('email', { required: true })}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Password*</label>
                        <div className="relative">
                            <input
                                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                                type={showPassword ? 'text' : 'password'}
                                {...register('password', { required: true, validate: validatePassword })}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <HiEyeOff /> : <HiEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1">Confirm Password*</label>
                        <div className="relative">
                            <input
                                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                                type={showConfirmPassword ? 'text' : 'password'}
                                {...register('confirmPassword', { required: true})}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1">Photo URL</label>
                        <input
                            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                            type="text"
                            {...register('photo')}
                        />
                    </div>

                    <button className=" text-white py-2 px-4 rounded w-full cus-btn" type="submit" >
                        Register
                    </button>

                    <div>
                        Have an account? <Link className="text-blue-500" to="/login">Log In</Link>
                    </div>

                    <SocialBtn></SocialBtn>
                </form>
            </div>
        </div>
    );
};

export default Login;