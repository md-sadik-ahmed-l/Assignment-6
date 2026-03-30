import React from 'react';
import UserImg from '../assets/user.png'
import RocketImg from '../assets/rocket.png'
import PackageImg from '../assets/package.png'

const ProcessCard = () => {
    return (
        <div className=' bg-[#edecec] py-25 gap-8 flex flex-col justify-center items-center'>

            <div className=''>

                <h3 className='pb-3 text-5xl font-extrabold'>Get Started in 3 Steps</h3>
                
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

            </div>

            <div className='flex flex-wrap justify-center items-center gap-10'>

                <div className='rounded-2xl shadow- p-3 bg-white'>

                    <button className='border px-2 py-1 rounded-full bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA] text-white'>01</button>


                    <div className='p-4 flex flex-col justify-center items-center  py-20 gap-4'>

                        <img className='p-5 rounded-full bg-gradient-to-tr from-[#beb9e9]  to-[#d8bdec] ' src={UserImg} alt="UserImg" />

                        <h3 className='text-2xl font-bold'>Create Account</h3>

                        <div  className='text-[#627382] max-w-70  flex justify-center items-center'>Sign up for free in seconds. No credit card required to get started.</div>

                    </div>

                </div>

                <div className='rounded-2xl shadow- p-3 bg-white'>

                    <button className='border px-2 py-1 rounded-full bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA] text-white'>02</button>


                    <div className='p-4 flex flex-col justify-center items-center  py-20 gap-4'>

                        <img className='p-5 rounded-full bg-gradient-to-tr from-[#beb9e9]  to-[#d8bdec] ' src={PackageImg} alt="UserImg" />

                        <h3 className='text-2xl font-bold'>Choose Products</h3>

                        <div  className='text-[#627382] max-w-70  flex justify-center items-center'>Browse our catalog and select the tools that fit your needs. </div>

                    </div>

                </div>

                <div className='rounded-2xl shadow- p-3 bg-white'>

                    <button className='border px-2 py-1 rounded-full bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA] text-white'>03</button>


                    <div className='p-4 flex flex-col justify-center items-center  py-20 gap-4'>

                        <img className='p-5 rounded-full bg-gradient-to-tr from-[#beb9e9]  to-[#d8bdec] ' src={RocketImg} alt="UserImg" />

                        <h3 className='text-2xl font-bold'>Start Creating</h3>

                        <div  className='text-[#627382] max-w-70  flex justify-center items-center'>Download and start using your premium tools immediately.</div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProcessCard;