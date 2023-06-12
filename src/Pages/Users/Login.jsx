import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import SocialBtn from '../../Components/SocialBtn/SocialBtn';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { signInWithEmail } = useContext(AuthContext);
    const { register, handleSubmit, reset} = useForm();
    const [showPassword, setShowPassword] = useState(false);

    // login path
    const location = useLocation(); 
    const path = location?.state?.from?.pathname || '/'; 
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const {email, password} = data;
        signInWithEmail(email, password)
        .then(() => {
            reset();
            navigate(path)
        })
        .catch(err => console.log(err.message))
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center my-12 md:my-12">
            <div className='border rounded-md w-[90%] md:w-[35%] py-12 px-6 md:px-10  md:shadow-md'>
                <h2 className="text-2xl font-bold mb-4 text-center uppercase">Login</h2>
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                            type="email"
                            {...register('email', { required: true })}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Password</label>
                        <div className="relative">
                            <input
                                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                                type={showPassword ? 'text' : 'password'}
                                {...register('password', { required: true})}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <HiEyeOff /> : <HiEye />}
                            </button>
                        </div>
                    </div>

                    <button className="cus-btn uppercase text-white py-2 px-4 rounded w-full" type="submit">
                        Login
                    </button>
                    <div >
                        Don't have an account? <Link className="text-blue-500" to="/register">Register</Link>
                    </div>
                    <SocialBtn></SocialBtn>
                </form>
            </div>
        </div>
    );
};

export default Login;