import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './sections/Banner';
import BusinessSummary from './sections/BusinessSummary';
import ContactUs from './sections/Extra/ContactUs';
import SocialMedia from './sections/Extra/SocialMedia';
import Reviews from './sections/Reviews';
import Tools from './sections/Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <SocialMedia></SocialMedia>
            <Footer></Footer>
        </div>
    );
};

export default Home;