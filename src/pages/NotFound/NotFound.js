import React from 'react';
import { Link } from 'react-router-dom';
import gif from '../../images/404Gif.gif'
const NotFound = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className=' w-1/4' src={gif} alt="" />
            <h2 className='text-center text-3xl'>I think You are lost, You should better go home.....</h2>
            <Link to={'/'}><button className='btn btn-secondary text-white mt-2'>Go back to home</button></Link>
        </div>
    );
};

export default NotFound;