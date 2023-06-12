import React, { useContext } from 'react';
import useUser from '../../../Hook/useUser';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const DashHeader = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [users] = useUser();
    const person = users.find(user => user.email === userEmail)
    // console.log(person)

    const menu = <>
        <li><Link to="/">Home</Link></li>
        {
            person?.rule === 'student' &&
            <>
                <li><Link to="/dashboard/mychoice">My Choice</Link></li>
                <li><Link to="/dashboard/class">Class</Link></li>
            </>
        }
        {
            person?.rule === 'admin' &&
            <>
                <li><Link to="/dashboard/manage-class">Manage Classes</Link></li>
                <li><Link to="/dashboard/manage-user">Manage Users</Link></li>
            </>
        }
        {
            person?.rule === 'instructor' &&
            <>
                <li><Link to="/dashboard/addclass">Add Class</Link></li>
                <li><Link to="/dashboard/instructorclass">My Class</Link></li>
            </>
        }

    </>
    return (
        <div className='h-[90px] bg-green-500 flex justify-center items-center'>
            <ul className='flex justify-center uppercase gap-5 font-bold text-white'>
                {menu}
            </ul>
        </div>
    );
};

export default DashHeader;