import React, { useEffect, useState } from 'react';
import Review from './Review';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stark-chamber-76919.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const navigate = useNavigate();

    if (reviews.length === 0) {
        return <>
            <h2 className='text-center my-20 text-4xl'>Our <span className='font-Mont font-extrabold text-primary'>C</span>ustomer's Reviews</h2>
            <Spinner></Spinner>
        </>
    }

    return (
        <div className="flex flex-col">
            <h2 className='text-center my-20 text-4xl'>Our <span className='font-Mont font-extrabold text-primary'>C</span>ustomer's Reviews</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 md:px-20 mb-30">
                {
                    reviews.slice(Math.max(reviews.length - 5, reviews.length - 3)).map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            <button onClick={() => navigate('/allreviews')} className="btn btn-primary text-white rounded-none mx-auto mt-10">See All Reviews</button>
        </div>
    );
};

export default Reviews;