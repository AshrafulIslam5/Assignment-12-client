import React from 'react';
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <div className='flex flex-col mt-52 mb-64 px-5 md:px-36'>
            <h2 className='text-center font-Mont font-bold text-3xl my-5'>Our Company Are the most known <span className='text-secondary'>House Accessories Manufacturer</span> around!</h2>
            <div className='stats stats-vertical md:stats-horizontal md:text-2xl shadow shadow-secondary-focus'>
                <div className="stat hover:text-white hover:bg-primary hover:shadow-2xl hover:shadow-primary place-items-center ">
                    <div className='stat-figure text-fuchsia-400'>
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <div className="stat-title">Served Customers</div>
                    <div className="stat-value"><CountUp  end={100} duration={4.7} />K</div>
                </div>
                <div className="stat hover:text-white hover:bg-secondary hover:shadow-2xl hover:shadow-primary place-items-center ">
                    <div className='stat-figure text-fuchsia-400'>
                        <ion-icon name="arrow-up-circle"></ion-icon>
                    </div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value"><CountUp delay={3} end={120} duration={5} />M</div>
                </div>
                <div className="stat hover:text-white hover:bg-primary hover:shadow-2xl hover:shadow-primary place-items-center ">
                    <div className='stat-figure text-fuchsia-400'>
                        <ion-icon name="flag-outline"></ion-icon>
                    </div>
                    <div className="stat-title">Countries Reached</div>
                    <div className="stat-value"><CountUp delay={3} end={60} duration={5.2} />+</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;