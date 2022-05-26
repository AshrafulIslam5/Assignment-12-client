import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({ tool, refetch }) => {
    const { _id, name, img, description, min_order_quan, quantity, price } = tool;
    const increaseQuan = e => {
        e.preventDefault();
        const Givenquantity = parseInt(e.target.quantity.value);
        if (Givenquantity <= 0) {
            toast.error("Please give a valid number")
        } else {
            const lastQuantity = {
                FinalQuantity: quantity + Givenquantity
            }

            fetch(`https://stark-chamber-76919.herokuapp.com/tools/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(lastQuantity)
            }).then(res => res.json()).then(data => {
                refetch();
                toast.info("Item Updated")
            })
        }
    }

    const deleteProduct = id => {
        fetch(`https://stark-chamber-76919.herokuapp.com/tools/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            refetch();
            toast.success(`${name} deletetd`)
        })
    }

    return (
        <div class="card w-full bg-base-100 shadow-xl relative pb-4">
            <figure className='p-6 mb-56 md:mb-44'><img src={img} alt="" /></figure>
            <div class="absolute bottom-2 flex flex-col text-center px-8">
                <h2 className='text-2xl font-semibold text-center'>{name}</h2>
                <p><strong>Minimum Order Quantity:</strong>{min_order_quan}</p>
                <p><strong>Total Quantity:</strong>{quantity}</p>
                <p>{description}</p>
                <p><strong>Price per Piece:</strong> {price}</p>

                <label htmlFor={_id} className='btn btn-xs bg-secondary px-5 mt-2 text-white '>Add Quantity</label>
                <label htmlFor={img} className='btn btn-xs bg-red-500 hover:bg-red-700 border-0 px-5 mt-2 text-white '>Remove Product</label>
            </div>
            <input type="checkbox" id={img} class="modal-toggle" />
            <div class="modal">
                <div class="flex flex-col modal-box">
                    <h2 className='mx-auto text-xl'>Are you sure You want to delete {name}?</h2>
                    <div className='mx-auto mt-3'>
                        <label onClick={() => deleteProduct(_id)} for={img} class="btn btn-secondary text-white btn-sm px-5">Yes</label>
                        <label for={img} class="ml-2 btn-sm px-5 btn btn-error text-white">No</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id={_id} class="modal-toggle" />
            <div class="modal">
                <div class="flex flex-col modal-box">
                    <label for={_id} class="btn btn-sm btn-primary text-white btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='mx-auto text-xl font-semibold'>How Many?</h2>
                    <form onSubmit={increaseQuan} className='mx-auto flex flex-col items-center'>
                        <input name='quantity' type="number" className='input input-bordered input-sm mt-5 text-center ' />
                        <input className='btn btn-sm px-5 mt-3 btn-secondary text-white  block' type="submit" value={'Update Quantity'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;