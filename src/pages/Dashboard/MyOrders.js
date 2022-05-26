import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user?.email}`, {
                method: "GET",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                return res.json()
            }).then(data => setOrders(data))
        }
    }, [user, navigate]);

    let newQuantity;

    const handleDelete = (id, toolId, quantity) => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json());

        fetch(`http://localhost:5000/tools/${toolId}`).then(res => res.json()).then(data => fetch(`http://localhost:5000/tools/${toolId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity = {
                FinalQuantity: quantity + data.quantity
            })
        }).then(res => res.json())).then(data => { window.location.reload() });

    }

    return (
        <div>
            <h2 className='text-xl my-3'>This are your <span className='text-secondary'>Orders</span></h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Purchaser Name</th>
                            <th>Tool</th>
                            <th>Qauntity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.length === 0
                            ?
                            <>
                                <th>1</th>
                                <th>No Purchases yet</th>
                                <th>No Purchases yet</th>
                                <th>No Purchases yet</th>
                                <th>No Purchases yet</th>
                                <th></th>
                            </>
                            :
                            orders?.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.PurchaserName}</td>
                                <td>{order.toolName}</td>
                                <td>{order.quantity} Pieces</td>
                                <td>${order.NeedToPay}</td>
                                <td>{
                                    order.paidStatus === false
                                        ?
                                        <>
                                            <button onClick={() => navigate(`/dashboard/payment/${order._id}`)} className='btn btn-secondary text-white btn-xs px-5'>Pay</button>
                                            <label for={index} className="btn btn-error btn-xs ml-2 text-white">delete</label>
                                        </>
                                        :
                                        <>
                                            <p className=' inline-block badge badge-secondary badge-outline px-4'>Paid</p>
                                            <label htmlFor={order.toolName} className="btn btn-primary btn-xs ml-2 text-white">details</label>
                                        </>
                                } </td>
                                <input type="checkbox" id={index} class="modal-toggle" />
                                <div class="modal">
                                    <div class="flex flex-col modal-box">
                                        <h2 className='mx-auto text-xl'>Are you sure You want to delete {order.toolName}?</h2>
                                        <div className='mx-auto mt-3'>
                                            <label onClick={() => handleDelete(order._id, order.toolId, order.quantity)} for={index} class="btn btn-secondary text-white btn-sm px-5">Yes</label>
                                            <label for={index} class="ml-2 btn-sm px-5 btn btn-error text-white">No</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="checkbox" id={order.toolName} class="modal-toggle" />
                                <div class="modal">
                                    <div class="flex flex-col modal-box">
                                        <label for={order.toolName} class="btn btn-sm btn-primary text-white btn-circle absolute right-2 top-2">✕</label>
                                        <p className='text-2xl text-primary'>Details about your paid Product</p>
                                        <p><strong>Item Purchaser: </strong>{order.PurchaserName}</p>
                                        <p><strong>Item Purchased: </strong>{order.toolName}</p>
                                        <p><strong>Item Purchased: </strong>{order.quantity} Pieces</p>
                                        <p><strong>Paid: </strong>${order.NeedToPay}</p>
                                        <p><strong>Transaction Id: </strong>{order.transactionId}</p>
                                    </div>
                                </div>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;