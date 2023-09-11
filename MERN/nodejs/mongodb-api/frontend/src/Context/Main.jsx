import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainContext = createContext();
const Main = (props) => {
    const BASEURL = process.env.REACT_APP_API_BASE_URL;
    const CATEGORY_BASEURL = process.env.REACT_APP_CATEGORY_BASE_URL;
    const COLOR_BASEURL = process.env.REACT_APP_COLOR_BASE_URL;
    const PRODUCT_BASEURL = process.env.REACT_APP_PRODUCT_BASE_URL;
    const ADMIN_BASEURL = process.env.REACT_APP_ADMIN_BASE_URL;

    const [admin, setAdmin] = useState(null);

    const notify = (msg, type) => {
        toast(msg, {
            type
        })
    };

    return (
        <MainContext.Provider value={
            { BASEURL, CATEGORY_BASEURL, COLOR_BASEURL, notify, PRODUCT_BASEURL, ADMIN_BASEURL, admin, setAdmin }
        }>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }