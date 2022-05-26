import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import DashboardLink from './DashboardLink';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [UserFromDB, setUserFromDB] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`).then(res => res.json()).then(data => setUserFromDB(data))
    }, [email]);

    const { admin } = UserFromDB;
    return (
        <div class="drawer">
            <input id="dashboard" type="checkbox" class="drawer-toggle" />
            <div class=" drawer-content p-10 bg-base-300">
                <div className='flex justify-between'>
                    <h2 className='text-2xl md:text-5xl text-primary font-Mont font-semibold'>Your Dashboard</h2>
                    <label for="dashboard" class="btn btn-xs btn-primary drawer-button md:px-5">Open drawer</label>
                </div>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard" class="drawer-overlay"></label>
                <div class="menu p-4 w-60 bg-base-100 text-base-content">
                    {!admin && <><DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard'}>My Profile</DashboardLink>
                        <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard/myOrders'}>My Orders</DashboardLink>
                        <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard/addReview'}>Give a Review</DashboardLink></>}
                    {
                        admin === true && <>
                            <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard'}>My Profile</DashboardLink>
                            <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard/manageOrders'}>Manage Orders</DashboardLink>
                            <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard/manageUsers'}>Manage Users</DashboardLink>
                            <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard/manageProducts'}>Manage Products</DashboardLink>

                        </>

                    }
                </div>

            </div>
        </div>
    );
};

export default Dashboard;