import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-1rem)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;