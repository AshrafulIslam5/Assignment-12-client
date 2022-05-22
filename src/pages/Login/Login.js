import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';

const Login = () => {
    const resetEmailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user || GoogleUser) {
            navigate(from, { replace: true });
        }
    }, [user, GoogleUser, navigate, from])

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const forgetPass = async e => {
        e.preventDefault();
        const resetEmail = resetEmailRef.current.value;
        console.log(resetEmail)
        await sendPasswordResetEmail(resetEmail);
        toast.info("Email sent!", {
            icon: false
        })
    }

    if (loading || GoogleLoading || sending) {
        return <Spinner></Spinner>
    }

    let errorMsg;
    if (error || GoogleError || ResetError) {
        errorMsg = <p className='text-red-500 text-xs mb-2'>{error?.message || GoogleError?.message || ResetError?.message}</p>
    }

    


    return (
        <div className='md:w-1/4 px-8 shadow-lg rounded-2xl mx-auto flex flex-col justify-center items-center mt-20'>
            <h2 className='py-5 text-secondary text-center text-2xl'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: 'Please provide email'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Please give a valid email'
                        }
                    })} type="email" placeholder="Your Email Address" className="input input-bordered hover:input-primary w-full mb-2" />
                    <label>
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}

                    </label>

                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register("password", {
                        required: {
                            value: true,
                            message: 'Please provide Password'
                        },
                        minLength: {
                            value: 6,
                            message: 'Atleast 6 charachters or longer'
                        }
                    })} type="password" placeholder="Password" className="input input-bordered hover:input-primary w-full" />
                    <label>
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}

                    </label>
                </div>
                <p className='text-xs text-left mt-3'>New to House Helpers? <Link to={'/signup'}><button className='text-secondary'>Create new account</button></Link></p>
                {errorMsg}
                <input type="submit" value="Login" className="input bg-secondary text-white uppercase mt-3  input-bordered w-full" />
            </form>
            <label for="Reset_modal" class="btn btn-link p-0 hover:no-underline text-xs text-accent modal-button">Forgot Password?</label>
            <div className="divider mt-0">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full font-light mb-8 uppercase hover:bg-primary">Continue with Google</button>
            <input type="checkbox" id="Reset_modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative text-center px-20">
                    <label for="Reset_modal" class="btn btn-sm btn-primary text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Reset Your Password</h3>
                    <form onSubmit={forgetPass}>
                        <label htmlFor="email" className='float-left ml-2 mt-3'>Email</label>
                        <input ref={resetEmailRef} type="email" className='w-full input input-bordered hover:input-primary' />
                        <input type="submit" value='Reset Password' class="btn btn-primary mx-auto w-full mt-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;