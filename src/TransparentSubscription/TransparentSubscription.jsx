import React, { use } from 'react';

import SubscriptionsCard from './SubscriptionsCard';

const TransparentSubscription = ({subscriptionPromise}) => {

    const subscriptionData = use(subscriptionPromise)
    
    return (
        <div className='flex flex-col justify-between items-center gap-10 my-20 '>

            <h1 className='font-bold text-5xl'>Simple, Transparent Pricing</h1>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            
            <div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-15 '>
                {
                    subscriptionData.map(subscription =>  <SubscriptionsCard subscription={subscription}></SubscriptionsCard> )        
                }
            </div>
            
        </div>
    );
};

export default TransparentSubscription;