import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import Register from '../Pages/Users/Register';
import Login from '../Pages/Users/Login';
import Home from '../Pages/Home/Home/Home';

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
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    },
]);

export default router;