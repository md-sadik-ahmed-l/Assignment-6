import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import ShoppingCart from '../assets/shopping-cart.png'

const ToolsCart = (  {selectedProducts, setSelectedProducts}) => {

    console.log(selectedProducts, "selectedProducts")

    const handleDeleteSelectedProducts = (ToolsData)=>{
        console.log(selectedProducts, "selectedProducts")

       
        
        const filteredTools = selectedProducts.filter(
            (selectedPlayer) => selectedPlayer.name !== ToolsData.name
        )

        // console.log(filteredPlayers, "filteredPlayers")
        setSelectedProducts(filteredTools)
        // setDollar(dollar + playerData.price)
    }

    return (
        <div>
            { selectedProducts.length === 0 ? 
                <div className='flex flex-col shadow-2xl bg-[#f0f0f0] px-90  rounded-2xl py-35 font-medium border border-[#d9d9d9] gap-3 text-2xl'>

                    <img className='w-8' src={ShoppingCart} alt="Shopping Cart" />
                    <h3>Your Cart is empty</h3>
                    
                </div>
                :selectedProducts.map((ToolsData) =>{
                    return <div className='flex justify-between items-center border rounded-2xl p-4 my-6'> 
                        <div className='flex items-center gap-4'>
                            <img className='w-25 rounded-2xl ' src={ToolsData.icon} alt="Tools image" />
                            <div className=''>
                                <h1 className='font-bold text-2xl pb-3'>{ToolsData.name}</h1>
                                <p className='font-semibold '>{ToolsData.price}</p>
                            </div>
                        </div>
                        <button onClick={()=> handleDeleteSelectedProducts(ToolsData)} className=' p-3 bg-[#c2b9b6] rounded-xl text-4xl  '>
                            <MdDeleteForever></MdDeleteForever>
                            
                        </button>
                        
                    </div>
                    

                })
            }
        </div>
    );
};

export default ToolsCart;