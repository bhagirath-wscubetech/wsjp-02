import React from 'react';
import Container from '../Components/Container';

const Store = () => {
    return (
        <div>
            <h5 className='bg-[#F6F7F8] text-center py-3 mt-[30px] text-[#33A0FF]'>
                Store / Accesories
            </h5>
            <Container>
                <div className="grid grid-cols-4 my-[30px]">
                    <div className='border border-red-400 h-[300px]'></div>
                    <div className='col-span-3 border border-blue-400 h-[300px]'></div>
                </div>
            </Container>
        </div>
    );
}

export default Store;
