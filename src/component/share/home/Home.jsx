import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../header/Navber';
import Footer from '../../footer/Footer';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;