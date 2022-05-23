import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, Uerror] = useUpdateProfile(auth);

    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    if (user || GoogleUser) {
        navigate('/')
    }
    if (loading || GoogleLoading || updating) {
        return <Spinner></Spinner>
    }
    let errorMsg;
    if (error || GoogleError || Uerror) {
        errorMsg = <p className='text-red-500 text-xs mb-2'>{error?.message || GoogleError?.message || Uerror?.message}</p>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    };
    return (
        <div className='md:w-1/4 px-8 shadow-lg rounded-2xl mx-auto flex flex-col justify-center items-center mt-20'>
            <h2 className='py-5 text-secondary text-center text-2xl'>Sign up</h2>
            <form className='w-10/12' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("name", {
                        required: {
                            value: true,
                            messgae: 'Please provide Your Name'
                        }
                    })} type="text" placeholder='Your Name' className="input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" />
                    <label>
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                    </label>
                </div>
                <div>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: 'Please provide email'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Please give a valid email'
                        }
                    })} type="email" placeholder="Your Email Address" className="input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" />
                    <label>
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}

                    </label>
                </div>
                <div className='mb-3'>
                    <input {...register("password", {
                        required: {
                            value: true,
                            message: 'Please provide Password'
                        },
                        minLength: {
                            value: 6,
                            message: 'Atleast 6 charachters or longer'
                        }
                    })} type="password" placeholder="Password" className="input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" />
                    <label>
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}

                    </label>
                </div>
                <p className='text-xs text-left mb-3'>Have an account? <Link to={'/login'}><button className='text-secondary'>Login!!</button></Link></p>
                {errorMsg}
                <input type="submit" value="Sign Up" className="input bg-secondary text-white uppercase  input-bordered w-full" />
            </form>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full font-light mb-8 uppercase hover:bg-primary">Continue with Google</button>
        </div>
    );
};

export default SignUp;