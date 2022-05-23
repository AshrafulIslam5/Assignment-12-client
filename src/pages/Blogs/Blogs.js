import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10'>
            <h2 className='text-center text-3xl mb-3'>Question Answers</h2>
            <div className='bg-slate-500 text-white p-5 rounded-lg mb-5'>
                <h2 className='text-3xl'>How will you improve the performance of a React Application?</h2>
                <hr className='my-2' />
                <p><strong>Ans: </strong>I will call the APIs paralelly if there are many and avoid as many inline functions as i can which will avoid re-renders. using useEffect instead of just declaring it to make things go more smoothly and fast. Hidden components like Modals* and others should be rendered conditionally to have better performance. Using Loading so that user experience enhances and code can wait for data/result to come. </p>
            </div>
            <div className='bg-slate-500 text-white p-5 rounded-lg'>
                <h2 className='text-3xl'>What are the different ways to manage a state in a React application?</h2>
                <hr className='my-2' />
                <p><strong>Ans: </strong>There are four main types of state that can be properly managed in React apps: <span className='text-red-300'>*Local State, Global state, Server state, url state*</span> Local states are states inside one component and cannot be shared with other components, whereas Global state is shared with others. If the state is stored on the server, it's server state. </p>
            </div>
            <div className='bg-slate-500 text-white p-5 rounded-lg mt-5'>
                <h2 className='text-3xl'> How does prototypical inheritance work?</h2>
                <hr className='my-2' />
                <p><strong>Ans: </strong>Prototypical inheritance is a feature in js used to add properties and methods in objects. Object can inherit the properties and methods of another object.  This model can also be known as  prototype-oriented,  prototypal, instance-based programming or classless. </p>
            </div>
            <div className='bg-slate-500 text-white p-5 rounded-lg mt-5'>
                <h2 className='text-2xl'>Why you do not set the state directly in React. For example, if you have <code>const [products, setProducts] = useState([]).</code> Why you do not set <code>products = [...]</code> instead, you use the <code>setProducts</code></h2>
                <hr className='my-2' />
                <p><strong>Ans: </strong>I don't set state like that directly because it will not work out that way. rather useState has given us a function to set the state for that variable. This helps and keeps the code much easy to read and understand. Also using <code>products = [...]</code> would re-render the code which is not much productive. This is why set function is used. </p>
            </div>
            <div className='bg-slate-500 text-white p-5 rounded-lg mt-5'>
                <h2 className='text-3xl'>What is a unit test? Why should write unit tests?</h2>
                <hr className='my-2' />
                <p><strong>Ans: </strong>Unit texts are automated tests written and used by software developers to ensure that their codes are or the section of the application(known as Unit) meets it requirments or not. Unit tests are commonly executed before deploying. This helps developers to save time and money and helps them write better codes which increases the production quite much! </p>
            </div>

        </div>
    );
};

export default Blogs;