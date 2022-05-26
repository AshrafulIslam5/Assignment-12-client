import React, { useState, useEffect } from 'react';
import Review from '../Home/sections/Review';
import Footer from '../Shared/Footer';
import Spinner from '../Shared/Spinner';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stark-chamber-76919.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    if (reviews.length === 0) {
        return <>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-secondary border-t-0 border-x-0 py-5 my-10'>Reviews By Our Customers</h2>
            <Spinner></Spinner>
        </>
    }
    return (
        <div>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-secondary border-t-0 border-x-0 py-5 my-10'>Reviews By Our Customers</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 md:px-20 mb-32'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllReviews;