import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './sections/Banner';
import BusinessSummary from './sections/BusinessSummary';
import Reviews from './sections/Reviews';
import Tools from './sections/Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;