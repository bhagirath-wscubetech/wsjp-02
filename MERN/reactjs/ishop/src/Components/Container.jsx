import React from 'react';

const Container = (props) => {
    return (
        <div className={
            ` ${props.fluid == true ? 'w-full' : 'max-w-[1200px]'} mx-auto px-3 ${props.extraClass ?? ''}`
        }>
            {props.children}
        </div>
    );
}

export default Container;
