import React, { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainContext = createContext();
const Main = (props) => {
    const BASEURL = process.env.REACT_APP_API_BASE_URL;
    const CATEGORY_BASEURL = process.env.REACT_APP_CATEGORY_BASE_URL;

    const notify = (msg, type) => {
        toast(msg, {
            type
        })
    };

    return (
        <MainContext.Provider value={
            { BASEURL, CATEGORY_BASEURL, notify }
        }>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }