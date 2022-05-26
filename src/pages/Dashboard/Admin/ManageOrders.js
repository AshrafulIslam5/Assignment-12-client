import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allPurchases', {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => setOrders(data))
    }, []);


    return (
        <div>
            <h2 className='text-2xl mt-2'>Total Orders: <span className='text-secondary'>{orders.length} orders</span></h2>

            
        </div>
    );
};

export default ManageOrders;