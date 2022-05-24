import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content p-10 bg-base-200">
                <h2 className='text-3xl text-primary font-Mont font-semibold'>Your Dashboard</h2>
                <Outlet />


                <label for="dashboard" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="dashboard" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-hidden w-80 bg-base-100 text-base-content">
                    <li><Link to={'/MyProfile'}>My Profile</Link></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;