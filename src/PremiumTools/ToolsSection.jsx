import React, { use } from 'react';
import ToolsProducts from './ToolsProducts';

const ToolsSection = ({ToolsPromise}) => {

    const Tools = use(ToolsPromise);
    return (
        <div>
            
            <div className='max-w-6xl space-y-4 mx-auto flex flex-col justify-center items-center my-30'>

                <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
                <div className='flex flex-col justify-center items-center'>
                    <p>Choose from our curated collection of premium digital products designed</p>
                    <p>to boost your productivity and creativity.</p>
                </div>

                <div className='mb-16 mt-9 flex border rounded-full'>

                    <button className='font-bold text-white   rounded-full cursor-pointer bg-linear-to-tr from-[#4F39F6]  to-[#9514FA] w-full py-3 px-7'>
                        Products
                    </button>

                    <button className='py-3 px-10    rounded-full cursor-pointer ' >
                        Cart(0)
                    </button>

                </div>
                <div className='flex flex-wrap justify-center gap-7'>

                    {
                        Tools.map(ToolsData => <ToolsProducts ToolsData={ToolsData}></ToolsProducts>)
                    }

                </div>
                

            </div>
        </div>
    );
};

export default ToolsSection;