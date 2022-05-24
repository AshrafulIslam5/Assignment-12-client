import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [UserFromDB, setUserFromDB] = useState({});
    const updatedEmail = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/user/${updatedEmail}`).then(res => res.json()).then(data => setUserFromDB(data))
    }, [updatedEmail])
    return (
        <div>
            <h2 className='text-2xl mt-2'>Give a <span className='text-secondary'>Review</span></h2>

            <div className='bg-base-100 p-5'>
                <form>
                    <h2 className='text-center text-2xl mb-5'>Your <span className='text-primary'>Review</span></h2>
                    <div className='flex'>
                        <div className='w-full py-2'>
                            <h2>Your Name</h2>
                            <input className='bg-slate-200 input input-bordered border-t-0 border-x-0 input-primary rounded-none text-center w-full' type="text" value={UserFromDB.name} />
                        </div>
                        <div className='divider divider-horizontal'></div>
                        <div className='w-full py-2'>
                            <h2>Your Address</h2>
                            <input className='bg-slate-200 input w-full input-bordered border-t-0 border-x-0 input-primary rounded-none text-center' type="text" value={UserFromDB.location} />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label>Your Review</label>
                        <textarea className='textarea textarea-primary w-full' cols="10"></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;