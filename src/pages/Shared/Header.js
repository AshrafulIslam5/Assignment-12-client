import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.png'
import CustomLink from '../CustomLink/CustomLink';
import noPfpUser from "../../images/user.png";
import HeaderSpinner from './HeaderSpinner';
const Header = () => {
    const [user, loading] = useAuthState(auth);

    if (user?.photoURL === null) {
        user.photoURL = noPfpUser;
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const navlinks = <>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/">Home</CustomLink>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/portfolio">Portfolio</CustomLink>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/allreviews">Reviews</CustomLink>
        <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/blogs">Blogs</CustomLink>
        {user && <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/dashboard">Dashboard</CustomLink>}
        {loading ? <HeaderSpinner></HeaderSpinner> :
            user
                ?
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" className="avatar">
                        <div className="w-10 rounded-full ring hover:ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} alt='' />
                        </div>
                    </div>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52">
                        <li><p>{user.displayName}</p></li>
                        <li><button onClick={logout}>Sign Out</button></li>
                    </ul>
                </div>
                :
                <CustomLink className='hover:bg-slate-100 py-3 px-2 rounded-lg active:bg-secondary active:text-white' to="/login">Login</CustomLink>}
    </>
    return (
        <div>
            <div class="navbar bg-base-100 px-16">
                <div className='navbar-start'>
                    <CustomLink to={'/'}><img className='w-20 hover:bg-slate-100 rounded-lg cursor-pointer' src={logo} alt="" /></CustomLink>
                </div>
                <div className='navbar-end'>
                    <div className="gap-3 items-center text-xl mr-6  hidden lg:flex">
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