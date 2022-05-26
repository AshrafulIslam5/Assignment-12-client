import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './PurchaseTool.css'
import { toast } from 'react-toastify';
import Spinner from '../../../Shared/Spinner';

const PurchaseTool = () => {
    // Input Refs
    const locationRef = useRef('');
    const numberRef = useRef();
    const shopRef = useRef('');
    const quantityRef = useRef();
    // Input Refs

    const { id } = useParams();
    const [user] = useAuthState(auth)
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()).then(data => setTool(data))
    }, [id]);

    if (tool === {}) {
        return <Spinner></Spinner>
    }
    const { _id, name, img, description, min_order_quan, quantity, Perprice, price } = tool;


    const HandleOrder = e => {
        e.preventDefault();
        const Givenquantity = parseInt(quantityRef.current.value);
        const PurchaserName = user?.displayName;
        const location = locationRef.current.value;
        const number = numberRef.current.value;
        const shopName = shopRef.current.value;
        const realPrice = Math.round(price * Givenquantity);
        const email = user?.email;
        const lastQuantity = {
            FinalQuantity: quantity - Givenquantity
        }
        if (Givenquantity < min_order_quan) {
            toast.error(`You need To atleast order ${min_order_quan} pieces`)
        } else if (Givenquantity > quantity) {
            toast.error("We are Sorry but We don't have that much in our Stock")
        }
        else {
            const purchase = {
                toolId: _id,
                toolName: name,
                PurchaserName: PurchaserName,
                PurchaserEmail: email,
                location: location,
                number: number,
                shopName: shopName,
                quantity: Givenquantity,
                NeedToPay: realPrice,
                paidStatus: false,
                Status: 'unpaid'
            };

            fetch('http://localhost:5000/purchase', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchase)
            })
                .then(res => res.json());

            fetch(`http://localhost:5000/tools/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(lastQuantity)
            }).then(res => res.json()).then(data => {
                window.location.reload();
                toast.info("Order SuccessFully Placed")
            })
        }


    }



    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-center text-3xl w-1/2 border-4 border-secondary border-x-0 py-5 my-10'>Order for <span className='text-primary'>{name}</span></h2>
            <div className='mt-5 text-center flex flex-col items-center'>
                <img className='w-1/4' src={img} alt="" />
                <h2><strong>Name: </strong>{name}</h2>
                <h2><strong>Description: </strong>{description}</h2>
                <h2><strong>Minimum Orderable Quantity: </strong>{min_order_quan} pieces</h2>
                <h2><strong>Available Quantity: </strong>{quantity} pieces remain</h2>
                <h2><strong>Price: </strong>{Perprice}</h2>
                <label htmlFor="Place_Order" className='btn btn-primary'>Place Order</label>
            </div>


            <input type="checkbox" id="Place_Order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative text-center px-20">
                    <label for="Place_Order" class="btn btn-sm btn-primary text-white btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg mb-4">Place Order for {name}</h3>
                    <form onSubmit={HandleOrder}>
                        <input placeholder='Your Name' value={user?.displayName} disabled type="text" className="mt-3 input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" />

                        <input placeholder='Your Email Address' value={user?.email} disabled type="email" className="mt-3 input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" />

                        <input ref={locationRef} placeholder='Your Office/Home Address' type="text" className="mt-3 input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" required />

                        <input ref={numberRef} placeholder='Your Phone Number' type="number" className="mt-3 input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" required />

                        <input ref={shopRef} placeholder='Your Shop Name' type="text" className="mt-3 input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" required />

                        <input ref={quantityRef} placeholder='Quantity' type="number" className="mt-3 input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2" required />

                        <input type="submit" value={`Place Order for ${name}`} class="btn btn-primary text-white mx-auto w-full mt-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseTool;