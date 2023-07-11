import React from 'react';

const Header = () => {
    return (
        <nav className='w-full bg-red-300'>
            <div className='max-w-[1200px] mx-auto grid grid-cols-4'>
                <div className='text-[40px] font-bold'>
                    Logo
                </div>
                <div className='col-span-3'>
                    <ul className='flex h-full items-center justify-end gap-9'>
                        <li>
                            <a href="">Home</a>
                        </li>
                        
                        <li>
                            <a href="">Home</a>
                        </li>
                        
                        <li>
                            <a href="">Home</a>
                        </li>
                        
                        <li>
                            <a href="">Home</a>
                        </li>
                        
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
