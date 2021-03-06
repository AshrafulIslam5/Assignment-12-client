import React from 'react';
import tailwind from '../../images/Tailwind_CSS_Logo.svg.png';
import heroku from '../../images/heroku-logo.png';
import mongoDb from '../../images/mongodb-pngrepo-com (1).png';
import JWT from '../../images/JWT.png'

const Portfolio = () => {
    const skills = [
        {
            name: 'HTML5',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg text-black text-4xl md:text-6xl'><ion-icon name="logo-html5"></ion-icon></div>
        },
        {
            name: 'CSS3',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg text-black text-4xl md:text-6xl'><ion-icon name="logo-css3"></ion-icon></div>
        },
        {
            name: 'Javascript',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg text-black text-4xl md:text-6xl'><ion-icon name="logo-javascript"></ion-icon></div>
        },
        {
            name: 'React',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg text-black text-4xl md:text-6xl'><ion-icon name="logo-react"></ion-icon></div>
        },
        {
            name: 'Nodejs',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg text-black text-4xl md:text-6xl'><ion-icon name="logo-nodejs"></ion-icon></div>
        },
        {
            name: 'Firebase',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg text-black text-4xl md:text-6xl'><ion-icon name="logo-firebase"></ion-icon></div>
        },
        {
            name: 'TailwindCss',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg mx-auto'><img className='w-[60px]' src={tailwind} alt="" /></div>
        },
        {
            name: 'MongoDB',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg mx-auto'><img className='w-[60px]' src={mongoDb} alt="" /></div>
        },
        {
            name: 'Heroku',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg mx-auto'><img className='w-[60px]' src={heroku} alt="" /></div>
        },
        {
            name: 'JWT',
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg mx-auto'><img className='w-[60px]' src={JWT} alt="" /></div>
        },
        {
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg'><h2 className='font-Mont'><span className='text-primary'>daisy</span>UI</h2></div>
        },
        {
            icon: <div className='border border-primary hover:border-accent  shadow shadow-primary hover:shadow-accent p-3 rounded-lg'><h2 className='font-Mont'>expressjs</h2></div>
        }
    ];


    const projects = [
        {
            Name: "Ashraful's Convention Center",
            img: "https://images2.imgbox.com/ce/7f/uQ79eHwy_o.png",
            LiveLink: "https://ashrafulsconventionstore.netlify.app/",
            description: "It was just a home page using raw CSS when I just started Learning :)"
        },
        {
            Name: "Star Laptops",
            img: "https://images2.imgbox.com/c6/85/RMwbWfUO_o.png",
            LiveLink: "https://assignment-11-ab83c.web.app/",
            description: "I managed to do the basics of this one but I feel it's still incomplete and not how I wanted so I am going to remake this :)"
        },
        {
            Name: "Ashraful's Phone Manager",
            img: "https://images2.imgbox.com/12/5e/PFewXV1q_o.png",
            LiveLink: "https://ashrafuls-phone-manager.netlify.app/",
            description: "This is when I was Learing about api and when I found a big api with many electronic products :)"
        }
    ]

    return (
        <div>
            <div className='flex flex-col md:flex-row mt-5 p-4 md:px-20'>
                <div className='border text-center md:w-2/4 flex flex-col items-center p-5 rounded-lg rounded-b-none md:rounded-r-none'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/270204230_2044185662408772_4760097193550730154_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dMEuLKMHk94AX-JK0Xj&_nc_ht=scontent.fdac27-2.fna&oh=00_AT9Jh6rtN0DX_G7DHBBcGIrYT1JbnkumdiyOhgoWe4vyuA&oe=628F9B48" alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className='mt-3 text-3xl font-Mont '>Ashraful Islam</h2>
                        <h2 className='mb-3 font-Mont '>ashraful.islam.mihad@gmail.com</h2>
                        <h2 className='text-sm text-secondary'>Web Developer</h2>
                    </div>
                    <div className='w-24 mt-5'>
                        <img className="w-16" src="https://allmemphis.org/wp-content/uploads/2017/11/Quote-Marks-Icon_Dark-Purple.png" alt="" />
                    </div>
                    <h2>I am looking forward to how <span className='text-primary'>far</span> I'm about to go</h2>
                    <div className='w-11/12 text-left border bg-purple-300 shadow-lg rounded-lg p-8 mt-8'>
                        <p><strong>Age: </strong>26</p>
                        <p><strong>Status: </strong>Married</p>
                        <p><strong>Location: </strong>Dhaka, Bangladesh</p>
                        <p><strong>Education</strong></p>
                        <p><strong>Now Learning: </strong>Material UI and more</p>
                    </div>
                </div>
                <div className="border rounded-lg  rounded-t-none md:rounded-tr-lg md:rounded-l-none md:w-3/4 p-10">
                    <div className='border p-5 flex flex-col items-center rounded-lg shadow-md'>
                        <h2 className='text-2xl mb-3'>Skills</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center'>
                            {
                                skills.map(skill => <div className='text-center flex flex-col'>
                                    {skill.icon}
                                    <h2>{skill.name}</h2>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-11/12 mx-auto rounded-xl md:shadow-2xl md:shadow-primary my-36'>
                <div className='p-5 md:p-16'>
                    <h2 className='text-center text-black text-2xl my-4'><span className='text-primary'>Projects</span> Done by me!</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {
                            projects.map(p => <div class="card w-full bg-base-100 shadow-xl p-4 relative border border-primary">
                                <figure className='p-4'><img className='border-primary rounded-lg border' src={p.img} alt="" /></figure>
                                <div class="flex flex-col text-center px-8 mb-16">
                                    <h2 className='text-xl font-semibold text-center'>{p.Name}</h2>
                                    <p className='text-sm'>{p.description}</p>
                                    <a rel='noreferrer' href={p.LiveLink} target='_blank' className='btn bg-fuchsia-600 btn-primary text-white absolute bottom-2' >Visit Site</a>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;