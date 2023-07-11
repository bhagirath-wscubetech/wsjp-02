import React from 'react';

const Tagline = (props) => {
    return (
        <div className='text-3xl mt-2 text-center'>
            {props.children}
        </div>
    );
}

export default Tagline;
