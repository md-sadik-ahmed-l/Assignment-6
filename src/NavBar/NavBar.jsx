import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = ({selectedProducts}) => {
    return (
        <div className='flex justify-between items-center px-5 lg:px-10 py-7 sticky top-0 z-50 bg-white'>
            <div className='text-5xl font-bold '>
                <h1>DigiTools</h1>
            </div>
            <div>
                <ul className='flex gap-3 lg:gap-5 text-xl text-[#9da9b4]'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='flex items-center md:gap-6 gap-4'>
                <div className='relative'> {selectedProducts.length > 0 && (

                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full' >{selectedProducts.length}</span>

                    )} 

                    <FiShoppingCart className='text-3xl font-medium cursor-pointer'></FiShoppingCart>

                </div>

                <div><button className='text-xl font-medium cursor-pointer'>Login</button></div>
                <div><button className='font-medium cursor-pointer text-xl px-7 py-3 rounded-full text-white bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA]'>Get Started</button></div>
            </div>
        </div>
    );
};

export default NavBar;
