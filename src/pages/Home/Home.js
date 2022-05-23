import React from 'react';
import Banner from './sections/Banner';
import BusinessSummary from './sections/BusinessSummary';
import Reviews from './sections/Reviews';
import Tools from './sections/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;