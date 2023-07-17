import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Gallery = () => {
    return (
        <>
            <Header />
            <div className='min-h-[100vh]'>
                <div className="max-w-[1200px] mx-auto py-3">
                    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp" />
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/6-col/img%20(90).webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Gallery;
