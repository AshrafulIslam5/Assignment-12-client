import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-12 mb-6 text-4xl text-primary font-Mont font-bold'>Manufactured Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-40'>
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;