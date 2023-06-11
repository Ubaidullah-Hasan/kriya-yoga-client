import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUser = () => {
    const {data: users = [], refetch, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:4000/users");
            return res.json()
        }
    })
    return [users, refetch, isLoading]
};

export default useUser;