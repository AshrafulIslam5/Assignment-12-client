import React from 'react';
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <div className='flex my-20'>
            <div className='stats text-3xl shadow mx-auto shadow-secondary-focus'>
                <div className="stat hover:text-white hover:bg-primary hover:shadow-2xl hover:shadow-primary place-items-center ">
                    <div className='stat-figure text-accent'>
                    <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <div className="stat-title">Served Customers</div>
                    <div className="stat-value"><CountUp delay={5} end={100} duration={1} />K</div>
                </div>
                <div className="stat hover:text-white hover:bg-secondary hover:shadow-2xl hover:shadow-primary place-items-center ">
                    <div className='stat-figure text-accent'>
                    <ion-icon name="arrow-up-circle"></ion-icon>
                    </div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value"><CountUp delay={5} end={120} duration={1.3} />M</div>
                </div>
                <div className="stat hover:text-white hover:bg-primary hover:shadow-2xl hover:shadow-primary place-items-center ">
                    <div className='stat-figure text-accent'>
                    <ion-icon name="flag-outline"></ion-icon>
                    </div>
                    <div className="stat-title">Countries Reached</div>
                    <div className="stat-value"><CountUp delay={5} end={60} duration={1.5} />+</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;