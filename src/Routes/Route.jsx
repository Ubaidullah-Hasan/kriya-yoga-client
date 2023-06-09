import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children:[
            {
                
            }
        ]
    },
]);

export default router;