import React from 'react';

const ExploreProducts = () => {
    return (
        <div className='py-30  text-white bg-gradient-to-tr from-[#4f39f6]  to-[#9514FA]'>
            <div className='flex flex-col justify-center items-center space-y-4'>
                <h3 className='font-extrabold text-5xl'>Ready to Transform Your Workflow?</h3>
                <div className='flex flex-col justify-center items-center'>
                    <p>Join thousands of professionals who are already using Digitools to work smarter.</p>
                    <p> Start your free trial today.</p>
                </div>
                <div className='pt-3 '>
                    <button className='font-semibold mr-5 py-2 px-6 rounded-full  bg-white text-[#4f39f6]'>Explore Products</button>
                    <button className='border border-white py-2 px-8 rounded-full font-semibold'>View Pricing</button>
                </div>
                
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default ExploreProducts;