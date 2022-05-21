import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'
const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100 px-10">
                <div className='navbar-start'>
                    <Link to={'/'}><img className='w-20 hover:bg-slate-200 rounded-lg cursor-pointer' src={logo} alt="" /></Link>
                </div>
                <div className='navbar-end'>
                    <div className="flex items-center gap-7 text-xl mr-6">
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">My Portfolio</Link>
                        <Link to="/blogs">My Blogs</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;