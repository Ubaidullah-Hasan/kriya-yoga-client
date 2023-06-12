import React from 'react';
import useUser from '../../../Hook/useUser';
import { FaUsers } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';



const Manageuser = () => {

    const [users, refetch] = useUser();
    console.log(users);



    const handleMakeAdmin = (user) => {
        console.log(user._id)
        fetch(`http://localhost:4000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: `${user.name} is an Admin Now!`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    const handleMakeInstructor = (user) => {
        console.log(user._id)
        fetch(`http://localhost:4000/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: `${user.name} is an Instructor Now!`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const handleDelete = (user) => {
        fetch(`http://localhost:4000/users/${user._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: `${user.name} is Delete Now!`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className='mt-8 md:mt-16 p-5 md:p-8 shadow-md bg-white'>
            <h3 className='text-2xl uppercase'>Total Users: {users.length}</h3>
            <div className="mt-9">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th className='bg-[#D1A054]'></th>
                            <th className='bg-[#D1A054]'>Image</th>
                            <th className='bg-[#D1A054]'>NAME</th>
                            <th className='bg-[#D1A054]'>email</th>
                            <th className='bg-[#D1A054]'>Instructor</th>
                            <th className='bg-[#D1A054]'>role</th>
                            <th className='bg-[#D1A054]'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={user.image} className='w-12 h-12' alt="" />
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            <button disabled={user.rule === "instructor"} onClick={() => { handleMakeInstructor(user) }} className="btn bg-[#39ba46] hover:bg-green-600 border-none"><GrYoga /></button>

                                        }
                                    </td>
                                    <td>
                                        {
                                            <button disabled={user.rule === "admin"} onClick={() => { handleMakeAdmin(user) }} className="btn bg-[#D1A054] hover:bg-[#b87f29] border-none"><FaUsers /></button>

                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => { handleDelete(user) }} className="btn bg-[#e22626] hover:bg-[#B91C1C] border-none"><RiDeleteBinLine /></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manageuser;