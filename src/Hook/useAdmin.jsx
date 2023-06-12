import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';


const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem("access-token");

    const { isLoading: isAdminLoading, data: isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`https://yoga-steel.vercel.app/users/admin/${user?.email}`, {
                headers: {
                    autorization: `bearer ${token}`
                }
            })

            if (response.status === 401) {
                console.log('Unauthorized');
            }
            else if (response.status === 403) {
                console.log('Forbidden');
            }
            else if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        }
    });
    console.log(isAdmin)
    return [isAdmin, isAdminLoading];

};

export default useAdmin;