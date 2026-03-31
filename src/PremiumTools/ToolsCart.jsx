import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import ShoppingCart from '../assets/shopping-cart.png'


 

const ToolsCart = (  {selectedProducts, setSelectedProducts}) => {

    console.log(selectedProducts, "selectedProducts")

    const handleDeleteSelectedProducts = (ToolsData)=>{
        console.log(selectedProducts, "selectedProducts")

       
        
        const filteredTools = selectedProducts.filter(
            (selectedPlayer) => selectedPlayer.id !== ToolsData.id
        )

        
        setSelectedProducts(filteredTools)
       
       
    }

    const total = selectedProducts.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className=''>
            { selectedProducts.length === 0 ? 
                <div className='flex flex-col shadow-2xl bg-[#f0f0f0] px-90  rounded-2xl py-35 font-medium border border-[#d9d9d9] gap-3 text-2xl'>

                    <img className='w-8' src={ShoppingCart} alt="Shopping Cart" />
                    <h3>Your Cart is empty</h3>
                    
                </div>
                :selectedProducts.map((ToolsData) =>{
                    return <div className=''> 
                        <div className='flex justify-between bg-[#f0f0f0] p-3 gap-35 items-center border border-[#d9d9d9] rounded-2xl mb-5'>

                            <div className='flex items-center gap-4'>

                                <img className='w-15 rounded-2xl ' src={ToolsData.icon} 
                                alt="Tools image" />

                                <div className=''>
                                    <h1 className='font-bold text-2xl pb-3'>{ToolsData.name}</h1>
                                    <p className='font-semibold '>${ToolsData.price}</p>
                                </div>

                            </div>

                            <button onClick={()=> handleDeleteSelectedProducts(ToolsData)} className=' p-3 bg-[#c2b9b6] rounded-xl text-4xl  '>

                                <MdDeleteForever></MdDeleteForever>
                                
                            </button>

                        </div>

                        
                        
                    </div>
                    

                })
            }

            {selectedProducts.length === 0 ? "" :

                <div className='flex flex-col justify-center space-y-5 mt-10'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-xl'>Total :</h4>
                        <h6 className='text-2xl font-medium'>$ {total}</h6>
                    </div>

                    <button  

                    onClick={() => setSelectedProducts([])}
                    className='text-white font-medium text-xl bg-linear-to-tr from-[#4F39F6]  to-[#9514FA] py-3 rounded-full'>Proceed to Checkout</button>
                </div>


            }
            

        </div>

    );
};

export default ToolsCart;