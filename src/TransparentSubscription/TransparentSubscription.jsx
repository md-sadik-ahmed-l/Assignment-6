import React, { use } from 'react';

import SubscriptionsCard from './SubscriptionsCard';

const TransparentSubscription = ({subscriptionPromise}) => {

    const subscriptionData = use(subscriptionPromise)
    
    return (
        <div className='flex flex-col justify-center items-center gap-10 my-20 '>

            <h1 className='font-bold text-5xl px-5'>Simple, Transparent Pricing</h1>
            <p className='px-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            
            <div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-15 '>
                {
                    subscriptionData.map(subscription =>  <SubscriptionsCard key={subscriptionData.id} subscription={subscription}></SubscriptionsCard> )        
                }
            </div>
            
        </div>
    );
};

export default TransparentSubscription;