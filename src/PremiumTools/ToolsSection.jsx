import React, { use, useState } from 'react';
import ToolsProducts from './ToolsProducts';
import ToolsCart from './ToolsCart';

const ToolsSection = ({ToolsPromise, selectedProducts, setSelectedProducts}) => {

    const [selectedType, setSelectedType] = useState("Products")

    

    const Tools = use(ToolsPromise);
    return (
        <div>
            
            <div className='max-w-6xl space-y-4 mx-auto flex flex-col justify-center items-center my-30'>

                <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
                <div className='flex flex-col justify-center items-center'>
                    <p>Choose from our curated collection of premium digital products designed</p>
                    <p>to boost your productivity and creativity.</p>
                </div>

                <div className='mb-16 mt-9 flex border p-1 rounded-full'>

                    <button 
                    
                    onClick={()=>  setSelectedType("Products")}
                    
                    className={`${selectedType === "Products" ?" text-white bg-linear-to-tr from-[#4F39F6]  to-[#9514FA] ":"" }  font-bold  mr-1  rounded-full cursor-pointer  w-full py-3 px-7`}>
                        Products
                    </button>

                    <button 

                        onClick={()=> setSelectedType ("Cart")}
                    
                        className= {`${selectedType === "Cart" ? " text-white bg-linear-to-tr from-[#4F39F6]  to-[#9514FA] ":"" } py-3 px-10  border  rounded-full cursor-pointer `}
                    >
                        Cart({selectedProducts.length})
                    </button>

                </div>
                
                { selectedType === "Products" ? 
                
                    <div className='flex flex-wrap justify-center gap-7'>

                        {
                            Tools.map(ToolsData => <ToolsProducts 
                                key={ToolsData.id} 
                                ToolsData={ToolsData}
                                selectedProducts ={ selectedProducts}
                                setSelectedProducts = {setSelectedProducts}

                            >

                            </ToolsProducts>)
                        }


                    </div>

                    :

                    <div className=''>

                        <ToolsCart selectedProducts= {selectedProducts} setSelectedProducts= {setSelectedProducts}></ToolsCart>

                    </div>


                }
                

            </div>
        </div>
    );
};

export default ToolsSection;