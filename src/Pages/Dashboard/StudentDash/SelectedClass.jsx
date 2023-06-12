import React, { useEffect } from 'react';
import useUser from '../../../Hook/useUser';

const SelectedClass = () => {
    const [users, refetch, , currentUser] = useUser()
    console.log(currentUser?.email)
    const token = localStorage.getItem("access-token");

    useEffect(() => {
        fetch(`http://localhost:4000/select-cources/${currentUser?.email}`, {
            headers: {
                autorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    return (
        <div>

        </div>
    );
};

export default SelectedClass;



