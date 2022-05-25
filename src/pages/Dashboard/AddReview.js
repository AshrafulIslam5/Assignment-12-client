import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const textAreaRef = useRef('')
    const [user] = useAuthState(auth);
    const [UserFromDB, setUserFromDB] = useState({});
    const [rating, setRating] = useState(0);
    const updatedEmail = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/user/${updatedEmail}`).then(res => res.json()).then(data => setUserFromDB(data))
    }, [updatedEmail]);

    const name = UserFromDB?.name;
    const location = UserFromDB?.location;
    const review = textAreaRef?.current.value;
    const rated = rating;
    const pfp = UserFromDB?.pfp;
    const fullReview = {
        name: name,
        Location: location,
        img: pfp,
        givenReview: review,
        rating: rated
    }



    // }, [rating, UserFromDB]);

    const clicked_05 = r => {
        setRating(r)
    }
    const clicked_1 = r => {
        setRating(r)
    }
    const clicked_15 = r => {
        setRating(r)
    }
    const clicked_2 = r => {
        setRating(r)
    }
    const clicked_25 = r => {
        setRating(r)
    }
    const clicked_3 = r => {
        setRating(r)
    }
    const clicked_35 = r => {
        setRating(r)
    }
    const clicked_4 = r => {
        setRating(r)
    }
    const clicked_45 = r => {
        setRating(r)
    }
    const clicked_5 = r => {
        setRating(r)
    }

    const giveReview = e => {
        e.preventDefault()
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullReview)
        }).then(res => res.json()).then(data => { window.location.reload() })
    }
    return (
        <div>
            <h2 className='text-2xl mt-2'>Give a <span className='text-secondary'>Review</span></h2>

            <div className='bg-base-100 p-5'>
                <form onSubmit={giveReview}>
                    <h2 className='text-center text-2xl mb-5'>Your <span className='text-primary'>Review</span></h2>
                    <div className='flex'>
                        <div className='w-full py-2'>
                            <h2>Your Name</h2>
                            <input className='bg-slate-200 input input-bordered border-t-0 border-x-0 input-primary rounded-none text-center w-full' type="text" value={UserFromDB.name} readOnly />
                        </div>
                        <div className='divider divider-horizontal'></div>
                        <div className='w-full py-2'>
                            <h2>Your Address</h2>
                            <input className='bg-slate-200 input w-full input-bordered border-t-0 border-x-0 input-primary rounded-none text-center' type="text" value={UserFromDB.location} />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label>Your Review</label>
                        <textarea ref={textAreaRef} className='textarea textarea-primary w-full' cols="10" required></textarea>
                    </div>
                    <div class="mt-2 rating rating-lg rating-half">
                        <input onClick={() => clicked_05(0.5)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-1" checked />
                        <input onClick={() => clicked_1(1)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-2" />
                        <input onClick={() => clicked_15(1.5)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-1" />
                        <input onClick={() => clicked_2(2)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-2" />
                        <input onClick={() => clicked_25(2.5)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-1" />
                        <input onClick={() => clicked_3(3)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-2" />
                        <input onClick={() => clicked_35(3.5)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-1" />
                        <input onClick={() => clicked_4(4)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-2" />
                        <input onClick={() => clicked_45(4.5)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-1" />
                        <input onClick={() => clicked_5(5)} type="radio" name={`${UserFromDB.name}`} class="bg-primary mask mask-star-2 mask-half-2" />
                    </div>
                    <input className='btn btn-primary block mt-5 text-white' type="submit" value={'Submit'} />
                </form>
            </div>
        </div>
    );
};

export default AddReview;