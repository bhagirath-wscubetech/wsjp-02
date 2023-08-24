import React, { createContext } from 'react';

const MainContext = createContext();
const Main = (props) => {
    const BASEURL = process.env.REACT_APP_API_BASE_URL;
    const CATEGORY_BASEURL = process.env.REACT_APP_CATEGORY_BASE_URL;
    return (
        <MainContext.Provider value={
            { BASEURL, CATEGORY_BASEURL }
        }>
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }