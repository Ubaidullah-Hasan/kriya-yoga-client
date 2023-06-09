import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const SocialBtn = () => {
    const { googleLogin } = useContext(AuthContext);
    

    const googleHandle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
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