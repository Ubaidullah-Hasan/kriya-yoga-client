import React, { useContext } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hook/useAdmin';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    // todo: loading || isAdminLoading
    if (loading || isAdminLoading) {
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
    // todo: user && isAdmin.admin
    if (user && isAdmin?.admin) {
        return children;
    }

    return <Navigate to="/" replate state={{ from: location }}></Navigate>

};

export default AdminRoute;