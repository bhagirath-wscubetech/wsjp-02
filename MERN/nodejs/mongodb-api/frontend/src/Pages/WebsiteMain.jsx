import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const WebsiteMain = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default WebsiteMain;
