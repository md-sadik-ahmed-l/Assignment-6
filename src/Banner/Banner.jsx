import React from 'react';
import BannerImage from '../assets/banner.png'
import Bannercercle from '../assets/Bannercercle.png'
import PlayButton from '../assets/Play.png'


const Banner = () => {
    return (
        <div>

            <div className="relative min-h-162.5 flex items-center overflow-hidden">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-tr from-[#a59bf5]  to-[#cc98f3] text-sm font-medium px-5 py-2 rounded-full">
                            <img src={Bannercercle} alt="Banner Cercle" /> <h1 className='text-[#4F39F6]'>New: AI-Powered Tools Available</h1>
                        </div>

                        <p className="text-lg text-[#627382] max-w-lg">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products

                        </p>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black">
                            Supercharge Your
                            <br />
                            <span className="bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent">
                            Digital Workflow
                            </span>
                        </h1>

                        

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA] cursor-pointer hover:bg-red-500  px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-[#4F39F6] text-white">
                            Explore Products
                        
                            </button>
                            <button className='border rounded-full px-6 py-2 flex items-center cursor-pointer'><img className='w-5 h-5' src={PlayButton} alt="Play Button" />Watch Demo</button>
                        </div>

                    
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            alt="AI Models Banner"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-wrap justify-center py-15 gap-70 items-center px-5 lg:px-10 text-white bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA]'>

                <div className=''>

                    <h3 className='font-extrabold text-5xl'>50K+</h3>
                    <p className='font-medium text-xl'>Active Users</p>

                </div>


                <div>

                    <h3 className='font-extrabold text-5xl'>200+</h3>
                    <p className='font-medium text-xl'>Premium Tools</p>

                </div>


                <div>

                    <h3 className='font-extrabold text-5xl'>4.9</h3>
                    <p className='font-medium text-xl'>Rating</p>

                </div>
            </div>

        </div>
    );
};

export default Banner;