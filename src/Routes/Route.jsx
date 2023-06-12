import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import Register from '../Pages/Users/Register';
import Login from '../Pages/Users/Login';
import Home from '../Pages/Home/Home/Home';
import Instructors from '../Pages/Instructors/Instructors/Instructors';
import Classes from '../Pages/Classes/Classes';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import Manageclass from '../Pages/Dashboard/AdminDash/Manageclass';
import Manageuser from '../Pages/Dashboard/AdminDash/Manageuser';
import Instructorclass from '../Pages/Dashboard/InstructorDash/Instructorclass';
import Addclass from '../Pages/Dashboard/InstructorDash/Addclass';
import AdminRoute from './AdminRoute';
import StudentRoute from './StudentRoute';
import InstructorRoute from './InstructorRoute';
import SelectedClass from '../Pages/Dashboard/StudentDash/SelectedClass';
import MyClasses from '../Pages/Dashboard/StudentDash/MyClasses';
import Payment from '../Pages/Dashboard/StudentDash/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/StudentDash/PaymentHistory';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "classes",
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // student route
            {
                path: "my-classes",
                element: <StudentRoute><MyClasses></MyClasses></StudentRoute>
            },
            {
                path: "selected-classes",
                element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
            },
            {
                path: "payment",
                element: <StudentRoute><Payment></Payment></StudentRoute>
            },
            {
                path: "payment-history",
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },


            // admin route
            {
                path: "manage-class",
                element: <AdminRoute><Manageclass></Manageclass></AdminRoute>
            },
            {
                path: "manage-user",
                element: <AdminRoute><Manageuser></Manageuser></AdminRoute>
            },

            // instructor route
            {
                path: "addclass",
                element: <InstructorRoute><Addclass></Addclass></InstructorRoute>
            },
            {
                path: "instructorclass",
                element: <InstructorRoute><Instructorclass></Instructorclass></InstructorRoute>
            },
        ]
    }
]);

export default router;