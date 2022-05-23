import React from 'react';

const Review = ({ review }) => {
    const { name, Location, img, givenReview } = review;
    return (
        <div className='border text-center bg-base-100 rounded-lg shadow-lg flex flex-col items-center px-6 pb-3'>
            <div class="avatar">
            <div class="w-20 rounded-full  ring-secondary ring-offset-base-100 ring-offset-4 ring-4 mt-[-30px]">
                    <img src={img} alt='' />
                </div>
            </div>
            <h3 className='mt-5 text-xl'>{name}</h3>
            <h3 className='text-slate-400 text-sm'>{Location}</h3>
            <h3>{givenReview}</h3>
        </div>
    );
};

export default Review;