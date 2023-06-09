import React from 'react';
import Header from '../Pages/PageLayout/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/PageLayout/Footer';

const Main = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;