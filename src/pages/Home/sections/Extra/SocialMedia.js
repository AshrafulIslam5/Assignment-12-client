import React from 'react';
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className='mt-52 SocialBG flex flex-col items-center justify-center'>
            <h2 className='text-3xl text-white'>Stay Connected with us for More benefits and orders by getting news from Our Social Medias</h2>

            <div>
                <ul className='social_icon'>
                    <li><a target='_blank' rel='noreferrer' href="https://www.instagram.com/?hl=en"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://www.facebook.com/matha.nosto.359/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://github.com/AshrafulIslam5"><ion-icon name="logo-github"></ion-icon></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/al-amin-islam-atif-1445b723a/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SocialMedia;