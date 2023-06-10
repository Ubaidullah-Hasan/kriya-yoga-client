import React from 'react';
import Header from '../Pages/PageLayout/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/PageLayout/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;