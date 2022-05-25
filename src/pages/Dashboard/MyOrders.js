import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [UserFromDB, setUserFromDB] = useState({});
    const [orders, setOrders] = useState([]);
    const [previousQuan, setPreviousQuan] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`).then(res => res.json()).then(data => setUserFromDB(data))
    }, [user]);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase/${user?.email}`, {
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
        }).then(res => res.json()).then(lastData => console.log(lastData)));

    }


    return (
        <div>
            <h2 className='text-xl mt-2'>This are your <span className='text-secondary'>Orders</span></h2>
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
                        {orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.PurchaserName}</td>
                            <td>{order.toolName}</td>
                            <td>{order.quantity} Pieces</td>
                            <td>${order.NeedToPay}</td>
                            <td>{
                                order.paidStatus === false
                                    ?
                                    <>
                                        <button className='btn btn-secondary text-white btn-xs px-5'>Pay</button>
                                        <label for="delete-confirmation" className="btn btn-error btn-xs ml-2 text-white">delete</label>
                                    </>
                                    :
                                    <>
                                        <p className=' inline-block badge badge-secondary badge-outline px-4'>Paid</p>
                                        <button className="btn btn-primary btn-xs ml-2 text-white">details</button>
                                    </>
                            } </td>
                            <input type="checkbox" id="delete-confirmation" class="modal-toggle" />
                            <div class="modal">
                                <div class="flex flex-col modal-box">
                                    <h2 className='mx-auto text-2xl'>Are you sure?</h2>
                                    <div className='mx-auto mt-3'>
                                        <label onClick={() => handleDelete(order._id, order.toolId, order.quantity)} for="delete-confirmation" class="btn btn-secondary text-white btn-sm px-5">Yes</label>
                                        <label for="delete-confirmation" class="ml-2 btn-sm px-5 btn btn-error text-white">No</label>
                                    </div>
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