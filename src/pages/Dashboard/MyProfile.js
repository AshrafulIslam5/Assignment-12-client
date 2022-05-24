import { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
    const imagebbKey = '05f94c8b5b6970010a4d4d5d9deb7468';
    const updatedEmail = user?.email;
    const [UserFromDB, setUserFromDB] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/${updatedEmail}`).then(res => res.json()).then(data => setUserFromDB(data))
    }, [updatedEmail])


    if (updating) {
        return <Spinner></Spinner>
    }
    if (Uerror) {
        console.log(Uerror?.message)
    }
    const updateUser = async (name, pfp) => {
        await updateProfile({ displayName: name, photoURL: pfp })
    }
    const UpdateUserProfile = async data => {
        console.log(data);
        const photo = data.photo[0];
        const formData = new FormData();
        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
        formData.append('image', photo)
        const updatedName = data.name;
        const updatedLocation = data.location;
        const updatedNumber = data.phone_number;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const pfp = data.data.url;
                updateUser(updatedName, pfp)
                const user = {
                    name: updatedName,
                    location: updatedLocation,
                    pfp: pfp,
                    number: updatedNumber,
                    email: updatedEmail,
                }
                fetch('http://localhost:5000/user', {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }).then(res => res.json()).then(data => { window.location.reload() })
            })
    }

    return (
        <div>
            <h2 className='text-2xl mt-2'><span className='text-secondary'>Update</span> Your Profile</h2>
            <div className='mt-5 bg-base-100 p-5 rounded-md'>
                <div className='flex items-center'>
                    <img className='w-1/6' src={user?.photoURL} alt="" />
                    <div className='ml-10'>
                        <h2 className='text-3xl'>{user?.displayName}</h2>
                        <h2>{user?.email}</h2>
                        <h2>{UserFromDB?.location}</h2>
                        <h2>{UserFromDB?.number}</h2>
                    </div>
                </div>

                <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-secondary border-t-0 border-x-0 py-5 my-10'>Update Your Profile</h2>
                <form onSubmit={handleSubmit(UpdateUserProfile)}>
                    <div className='my-10 flex'>
                        <div className='w-full'>
                            <label htmlFor="name" className="text-secondary">
                                Change Your Name
                            </label>
                            <input
                                {...register("name")}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="off"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Your New Name"
                            />
                        </div>
                        <div className='divider divider-horizontal'></div>
                        <div className='w-full'>
                            <label htmlFor="email-address" className="text-secondary">
                                Email address
                            </label>
                            <input
                                {...register("email")}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="off"
                                value={user?.email}
                                read={false}
                                required
                                className="disabled pointer-events-none bg-slate-200 shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Email address"
                            />
                        </div>
                    </div>
                    <div className='my-10 flex'>
                        <div className='w-full'>
                            <label htmlFor="location" className="text-secondary">
                                Your Location
                            </label>
                            <input
                                {...register("location")}
                                id="location"
                                name="location"
                                type="text"
                                autoComplete="off"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Your location"
                            />
                        </div>
                        <div className='divider divider-horizontal'></div>
                        <div className='w-full'>
                            <label htmlFor="phone_number" className="text-secondary">
                                Phone Number
                            </label>
                            <input
                                {...register("phone_number")}
                                id="phone_number"
                                name="phone_number"
                                type="number"
                                autoComplete="off"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Your Contact Number"
                            />
                        </div>

                    </div>
                    <div className='flex my-5 gap-10 items-center'>
                        <label className='btn btn-primary text-white'>
                            <input {...register("photo")} type="file" required />
                            <span>Update Photo</span>
                        </label>
                        <p><small>*Update your Profile Picture if you don't have any*</small></p>
                    </div>
                    <input className='btn btn-secondary text-white' type="submit" value="Update My Profile" />
                </form>


            </div>
        </div>
    );
};

export default MyProfile;