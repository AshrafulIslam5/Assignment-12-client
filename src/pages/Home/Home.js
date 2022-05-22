import React from 'react';
import Banner from './sections/Banner';
import BusinessSummary from './sections/BusinessSummary';
import Tools from './sections/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;