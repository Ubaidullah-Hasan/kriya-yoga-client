import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useUser = () => {
    const { user } = useContext(AuthContext);
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("https://yoga-steel.vercel.app/users");
            return res.json()
        }
    })
    const currentUser = users.find(ur => ur?.email === user?.email)

    return [users, refetch, isLoading, currentUser]
};

export default useUser;