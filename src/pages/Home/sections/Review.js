import React from 'react';

const Review = ({ review }) => {
    let { name, Location, img, givenReview, rating } = review;
    if (rating === 0 || rating === '' || rating === undefined || rating === null) {
        rating = 0.5;
    }

    let ratings;

    // sorry for so many repeated codes...... I tried ternary in many ways but didn't work for me, but this worked....
    if (rating === 0.5) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 1) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }


    if (rating === 1.5) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 2) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 2.5) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 3) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 3.5) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 4) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 4.5) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled checked />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
        </>
    }



    if (rating === 5) {
        ratings = <>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled ></input>
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-1" disabled />
            <input type="radio" name={`${name}`} class="cursor-default bg-primary mask mask-star-2 mask-half-2" disabled checked />
        </>
    }

    return (
        <div className='border text-center bg-base-100 rounded-lg shadow-lg flex flex-col items-center px-6 pb-3 mt-12 mdmt-0'>
            <div class="avatar">
                <div class="w-20 rounded-full  ring-secondary ring-offset-base-100 ring-offset-4 ring-4 mt-[-30px] ">
                    <img src={img} alt='' />
                </div>
            </div>
            <h3 className='mt-5 text-xl'>{name}</h3>
            <h3 className='text-slate-400 text-sm'>{Location}</h3>
            <h3>{givenReview}</h3>
            <div class="mt-2 rating rating-md rating-half">
                {ratings}
            </div>
        </div>
    );
};

export default Review;