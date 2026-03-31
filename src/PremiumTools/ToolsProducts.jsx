import React, { useState } from 'react';
import ToolsFeatures from './ToolsFeatures';
import { toast } from 'react-toastify';


const ToolsProducts = ({ToolsData, selectedProducts, setSelectedProducts }) => {

    const {name, description, icon, period, price, tag, features  } =ToolsData;


    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = ()=>{

        const exists = selectedProducts.find(item => item.id === ToolsData.id);

        if (exists) {
            toast.warning(`${ToolsData.name} is already add to cart!`);
            return;
        }

        

        toast.success( `${ToolsData.name} is selected`)
        setIsSelected(true)
        setSelectedProducts([...selectedProducts, ToolsData]);

    };



    return (


        <div className=' relative shadow-2xl rounded-2xl border border-[#dddada] w-80 p-6 bg-[#f0f0f3]'>
            <h1 className= {`absolute top-5 right-5 py-1 px-3 rounded-full text-black
            ${tag === "New" ? "bg-[#74d79d]" : tag === "Popular" ? "bg-[#b2bdea]" : tag === "Best Seller" ? "bg-[#daa680]" : "bg-gray-500"}`}>{tag}</h1>

            <div className=''>

                <img src={icon} alt="icon" />
                <h1 className='font-bold text-2xl '>{name}</h1>
                <p className='text-[#627382]'>{description}</p>
                <div className='flex mt-2 items-center'>
                    <h3 className='font-bold text-2xl'>${price}</h3>
                    <p className='text-[#627382]'>/{period}</p>
                </div>

                <div>
                    {
                        features.map(features=> <ToolsFeatures features={features}></ToolsFeatures>)
                    }
                </div>


            </div>

            <div className='flex justify-center mt-5  text-white '>


                <button 

                onClick={handleChoosePlayer}
                disabled = {isSelected}
                className='font-bold rounded-full cursor-pointer bg-linear-to-tr from-[#4F39F6]  to-[#9514FA] w-full py-3'>

                    {isSelected ? "selected": "Buy Now"}
                </button>


            </div>

            
        </div>
    );
};

export default ToolsProducts;