import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/allPurchases', {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const deleteOrder = id => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            refetch();
            toast.success("Successfully Deleted")
        })
    };

    const Ship = id => {
        fetch(`http://localhost:5000/allPurchases/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            refetch();
        })
    }


    return (
        <div>
            <h2 className='text-2xl mt-2'>Total Orders: <span className='text-secondary'>{orders.length} orders</span></h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.PurchaserEmail}</td>
                                <td>{order.toolName}</td>
                                <td>{order.quantity} Pieces</td>
                                {order.paidStatus === true
                                    ?
                                    <td><p className='badge badge-secondary badge-outline px-4'>{order.Status}</p></td>
                                    :
                                    <td><p className='badge badge-error badge-outline px-4'>{order.Status}</p></td>
                                }
                                {
                                    order.Status === 'unpaid' ?
                                        <td><label htmlFor={order._id} className='btn bg-red-500 hover:bg-red-700 btn-xs px-5 text-white border-0'>Delete</label></td>
                                        :
                                        order.Status === 'pending'
                                            ?
                                            <td><label htmlFor={order.transactionId} className='btn bg-secondary hover:bg-secondary btn-xs px-[26px] text-white border-0'>Ship</label></td>
                                            :
                                            <td></td>
                                }
                                <input type="checkbox" id={order._id} class="modal-toggle" />
                                <div class="modal">
                                    <div class="flex flex-col modal-box">
                                        <h2 className='mx-auto text-xl'>Are you sure You want to delete</h2>
                                        <h2 className='text-center'> {order.PurchaserEmail}'s order for {order.toolName}?</h2>
                                        <div className='mx-auto mt-3'>

                                            <label onClick={() => deleteOrder(order._id)} for={order._id} class="btn btn-secondary text-white btn-sm px-5">Yes</label>

                                            <label for={order._id} class="ml-2 btn-sm px-5 btn btn-error text-white">No</label>
                                        </div>
                                    </div>
                                </div>

                                <input type="checkbox" id={order.transactionId} class="modal-toggle" />
                                <div class="modal">
                                    <div class="flex flex-col modal-box">
                                        <h2 className='mx-auto text-xl'>Are you sure You want to Ship</h2>
                                        <h2 className='text-center'> {order.PurchaserEmail}'s order for {order.toolName}?</h2>
                                        <div className='mx-auto mt-3'>

                                            <label onClick={() => Ship(order._id)} for={order.transactionId} class="btn btn-secondary text-white btn-sm px-5">Yes</label>

                                            <label for={order.transactionId} class="ml-2 btn-sm px-5 btn btn-error text-white">No</label>
                                        </div>
                                    </div>
                                </div>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;