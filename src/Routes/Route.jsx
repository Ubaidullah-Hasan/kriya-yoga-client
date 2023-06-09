import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import Register from '../Pages/Users/Register';
import Login from '../Pages/Users/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '*',
                element: <NotFoundPage></NotFoundPage>
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
]);

export default router;