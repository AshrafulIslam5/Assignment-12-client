import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cError, setCError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate()

    const { NeedToPay: price, PurchaserName, PurchaserEmail, _id } = order


    useEffect(() => {
        fetch('http://localhost:5000/createPaymentIntent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        }).then(res => res.json()).then(data => {
            if (data.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCError(paymentError?.message || '')
        setSuccess('')

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: PurchaserName,
                        email: PurchaserEmail
                    },
                },
            },
        );
        if (intentError) {
            setCError(intentError?.message)
        } else {
            setCError('');
            setTransactionId(paymentIntent.id)
            setSuccess('Your Payment is Successful')

            const sendingTransactionId = {
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/purchase/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(sendingTransactionId)
            }).then(res => res.json()).then(data => {navigate('/dashboard')})

        };
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#9400d3',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#DC1C13',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary btn-sm text-white px-5 mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                success && toast.info("Your Payment is done")
            }
        </>
    );
};

export default CheckoutForm;