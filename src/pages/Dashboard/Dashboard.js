import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardLink from './DashboardLink';
const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" class="drawer-toggle" />
            <div class="md:rounded-tl-xl drawer-content p-10 bg-base-200">
                <div className='flex justify-between'>
                    <h2 className='text-5xl text-primary font-Mont font-semibold'>Your Dashboard</h2>
                    <label for="dashboard" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <Outlet />

            </div>
            <div class="drawer-side ">
                <label for="dashboard" class="drawer-overlay"></label>
                <div class="menu p-4 w-60 bg-base-100 text-base-content">
                    <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard'}>My Orders</DashboardLink>
                    <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard/myProfile'}>My Profile</DashboardLink>
                    <DashboardLink className="btn btn-ghost w-52 mb-2" to={'/dashboard/addReview'}>Give a Review</DashboardLink>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;