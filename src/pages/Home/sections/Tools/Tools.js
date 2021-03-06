import React, { useEffect, useState } from 'react';
import Spinner from '../../../Shared/Spinner';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState();
    useEffect(() => {
        fetch('https://stark-chamber-76919.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);
    if (tools === undefined) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h2 className='text-center mt-12 mb-6 text-2xl md:text-4xl text-primary font-Mont font-bold'>Manufactured Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-10 md:px-40 md:mt-10'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;