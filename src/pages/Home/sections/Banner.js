import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner_image flex justify-center items-center'>
            <div className='text-white text-center'>
                <h2 className='text-6xl'>Keep Your home <span className='text-primary'>Updated!</span></h2>
                <h2 className='text-xl'><span className='text-primary'>Never</span> let go of your home's <span className='text-secondary'>Neatness</span> and <span className='text-secondary'>Beautifulness</span></h2>
            </div>
        </div>
    );
};

export default Banner;