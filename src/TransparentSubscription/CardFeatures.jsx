import React from 'react';
import { LuCircleCheckBig } from 'react-icons/lu';

const CardFeatures = ({features}) => {
    
    return (
        <div>
            <p className='flex items-center gap-2 pt-2'> <LuCircleCheckBig className='text-green-700 rounded-full'></LuCircleCheckBig> {features}</p>
        </div>
    );
};

export default CardFeatures;