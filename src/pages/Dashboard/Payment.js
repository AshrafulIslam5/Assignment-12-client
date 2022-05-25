import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

const stripePromise = loadStripe('pk_test_51L1CmjIKCOf2xcPTbOrT78OStsjLNJDh1cdiYVvrRK2QuZ9EjYIq6CpbbI9yYWkhOBHCSLlp7pfENJjm7tMxfJsS000yrWZPls');

const Payment = () => {
    const { id } = useParams();

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`http://localhost:5000/purchase/${id}`, {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }


    return (
        <div>
            <h2 className='text-2xl my-7 md:my-2 text-center md:text-left'>Payment for <span className='text-secondary'>{order.toolName}</span></h2>

            <div className='flex flex-col md:flex-row md:justify-center'>
                <div className='px-3 md:py-5 md:px-0'>
                    <div className='bg-base-100 p-5 rounded-lg shadow-lg'>
                        <h2 className='mb-4'>Hello <span className='text-secondary'>{order.PurchaserName}</span></h2>
                        <h2>Total Cost for {order.quantity} pieces of {order.toolName} (s) </h2>
                        <h2>Is <span className='text-secondary'>${order.NeedToPay}</span></h2>
                    </div>
                </div>
                <div className='divider divider-vertical md:divider-horizontal'></div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Payment;