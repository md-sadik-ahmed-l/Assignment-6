import React from 'react';
import CardFeatures from './CardFeatures';

const SubscriptionsCard = ({subscription}) => {

    const {title, subtitle, price, billing, buttonText, features } = subscription;
    return (
        <div className=' shadow-2xl rounded-2xl border border-[#dddada] p-6 bg-[#f3f2f2] space-y-6'>
            
            <div className=' space-y-1'>
                <h1 className='font-bold text-3xl'>{title}</h1>
                <h1 className='text-[#7f7f7f] '>{subtitle}</h1>
                <h1 className='font-bold text-3xl pt-3'>{price} /<span className='text-xl'>{billing}</span></h1>
            </div>


            <div>
                {
                    features.map(features => <CardFeatures features={features}></CardFeatures>)
                }
            </div>

            <div >
                <button className='font-medium cursor-pointer text-xl px-16 py-3 rounded-full text-white bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA]'>{buttonText}</button>
            </div>

        </div>
    );
};

export default SubscriptionsCard;