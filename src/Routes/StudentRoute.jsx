import React, { useContext } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import useUser from '../Hook/useUser';

const StudentRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [, refetch, isLoading, currentUser] = useUser();
    console.log(currentUser?.rule)

    
    if (loading || isLoading) {
        return <div className='flex justify-center items-center h-[400px]'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    }
    
    if (user && currentUser?.rule === 'student') {
        return children;
    }

    return <Navigate to="/" replate ></Navigate>
};

export default StudentRoute;