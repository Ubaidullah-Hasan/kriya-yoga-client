import React from 'react';
import useUser from './useUser';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
    const [, , , currentUser] = useUser()

    const token = localStorage.getItem("access-token");


    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', currentUser?.email],
        queryFn: async () => {
            const response = await fetch(`https://yoga-steel.vercel.app/select-cources/${currentUser?.email}`, {
                headers: {
                    autorization: `bearer ${token}`
                }
            })
            return response.json()
        }
    });

    // price fucntionality
    const longPrice = classes.reduce((sum, indexValue) => sum + indexValue.price, 0);
    const totalPrice = parseFloat(longPrice.toFixed(2));
    // price fucntionality

    console.log(currentUser.email)
    console.log(classes)
    return [classes, refetch, totalPrice];
};

export default useClasses;