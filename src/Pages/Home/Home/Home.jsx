import React from 'react';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import PopularClasses from '../PopularClasses/PopularClasses';
import Instructor from '../Instructor/Instructor';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <Gallery></Gallery>
            <Instructor></Instructor>
        </>
    );
};

export default Home;