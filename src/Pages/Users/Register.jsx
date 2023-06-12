import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import SocialBtn from '../../Components/SocialBtn/SocialBtn';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const { signUpWithEmail, updateUserProfile } = useContext(AuthContext);
    const [dismatch, setDismatch] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        const { name, email, password, confirmPassword, photo } = data;
        if (password !== confirmPassword) {
            return setDismatch("Dismatch password!");
        }
        signUpWithEmail(email, password)
            .then((success) => {
                console.log(success.user)
                updateUserProfile(name, photo)
                    .then(() => {
                        const saveUser = {
                            name: name,
                            image: photo,
                            email: email,
                            rule: "student"
                        }
                        fetch("http://localhost:4000/users", {
                            method: 'POST',
                            headers: {
                                "content-type":"application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.insertedId){
                                reset();
                                console.log("successfull update")
                                navigate("/");
                            }
                        })
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
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
                                {...register('confirmPassword', { required: true })}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                            </button>
                        </div>
                        {dismatch && (
                            <p className="text-red-500 text-sm mt-1">{dismatch}</p>
                        )}
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

export default Register;