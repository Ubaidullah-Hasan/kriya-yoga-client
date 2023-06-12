import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialBtn = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const path = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const googleHandle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const saveUser = {
                    name: result.user?.displayName,
                    image: result.user?.photoURL,
                    email: result.user?.email,
                    rule: "student"
                }
                fetch("https://yoga-steel.vercel.app/users", {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(path)
                    })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <button onClick={googleHandle} className="cus-btn mx-auto text-white  mt-4 rounded-full w-11 h-11 flex justify-center items-center" >
            <FaGoogle />
        </button>
    );
};

export default SocialBtn;