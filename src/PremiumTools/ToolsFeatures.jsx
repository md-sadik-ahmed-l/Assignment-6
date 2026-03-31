import React from 'react';
import { LuCircleCheckBig } from 'react-icons/lu';

const ToolsFeatures = ({features}) => {


    return (
        <div>
            <p className='flex items-center gap-2 pt-2 text-[#627382]'> 
                <LuCircleCheckBig></LuCircleCheckBig>
                 {features}</p>
        </div>
    );
};

export default ToolsFeatures;