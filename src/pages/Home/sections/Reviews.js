import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log(reviews?.slice(reviews[reviews.length - 1], 2));

    const lastReview = reviews[reviews?.length - 1]
    return (
        <div>
            <h2 className='text-center my-20 text-4xl'>Our <span className='font-Mont font-extrabold text-primary'>C</span>ustomer's Reviews</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 md:px-20 mb-30">
                {
                    reviews.slice(Math.max(reviews.length - 5, reviews.length - 3)).map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;