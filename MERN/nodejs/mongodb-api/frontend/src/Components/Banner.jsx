import React from 'react';

const Banner = () => {
    return (
        <div className='w-full h-[400px] md:h-[600px] mt-8 relative' style={{
            background: 'linear-gradient(67deg, rgba(231,29,58,1) 0%, rgba(236,199,193,1) 45%, rgba(239,202,196,1) 58%, rgba(228,189,184,1) 70%, rgba(66,168,254,1) 100%'
        }}>
            <img src="img/2_corousel.png" className='absolute bottom-0 right-0 md:right-10' alt="" />
        </div>
    );
}

export default Banner;
