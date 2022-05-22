import React from 'react';
import logo from '../../images/Logo.png'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100 px-10">
                <div className='navbar-start'>
                    <CustomLink to={'/'}><img className='w-20 hover:bg-slate-200 rounded-lg cursor-pointer' src={logo} alt="" /></CustomLink>
                </div>
                <div className='navbar-end'>
                    <div className="flex items-center gap-7 text-xl mr-6">
                        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/">Home</CustomLink>
                        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/portfolio">My Portfolio</CustomLink>
                        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/blogs">My Blogs</CustomLink>
                        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/dashboard">Dashboard</CustomLink>
                        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/login">Login</CustomLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;