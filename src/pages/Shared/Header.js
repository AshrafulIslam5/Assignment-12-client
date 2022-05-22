import React from 'react';
import logo from '../../images/Logo.png'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const navlinks = <>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/">Home</CustomLink>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/portfolio">My Portfolio</CustomLink>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/blogs">My Blogs</CustomLink>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/dashboard">Dashboard</CustomLink>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/login">Login</CustomLink>
    </>
    return (
        <div>
            <div class="navbar bg-base-100 px-16">
                <div className='navbar-start'>
                    <CustomLink to={'/'}><img className='w-20 hover:bg-slate-100 rounded-lg cursor-pointer' src={logo} alt="" /></CustomLink>
                </div>
                <div className='navbar-end'>
                    <div className="gap-7 text-xl mr-6  hidden md:flex">
                        {navlinks}
                    </div>
                    <div class="dropdown dropdown-end lg:hidden">
                        <label tabIndex={"0"} class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <div tabindex="0" class="dropdown-content menu p-5 shadow bg-base-100 rounded-box w-52 gap-7">
                            {navlinks}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;