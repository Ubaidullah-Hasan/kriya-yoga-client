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
import MyChoice from '../Pages/Dashboard/StudentDash/MyChoice';
import Class from '../Pages/Dashboard/StudentDash/Class';
import Manageclass from '../Pages/Dashboard/AdminDash/Manageclass';
import Manageuser from '../Pages/Dashboard/AdminDash/Manageuser';
import Instructorclass from '../Pages/Dashboard/InstructorDash/Instructorclass';
import Addclass from '../Pages/Dashboard/InstructorDash/Addclass';
import AdminRoute from './AdminRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
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
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "mychoice",
                element: <MyChoice></MyChoice>
            },
            {
                path: "class",
                element: <Class></Class>
            },
            {
                path: "manage-class",
                element: <AdminRoute><Manageclass></Manageclass></AdminRoute>
            },
            {
                path: "manage-user",
                element: <AdminRoute><Manageuser></Manageuser></AdminRoute>
            },
            {
                path: "addclass",
                element: <Addclass></Addclass>
            },
            {
                path: "instructorclass",
                element: <Instructorclass></Instructorclass>
            },
        ]
    }
]);

export default router;