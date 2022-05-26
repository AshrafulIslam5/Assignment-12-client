import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const navigate = useNavigate()
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className='text-2xl my-2'>All Your <span className="text-secondary">Products</span></h2>
            <div className='grid md:grid-cols-3 gap-4 px-5 md:px-52'>
                {
                    tools.map(tool => <ManageProduct key={tool._id} tool={tool} refetch={refetch}></ManageProduct>)
                }
            </div>
            <div className='mt-20'>
                <button onClick={() => navigate('/dashboard/addProducts')} className='btn btn-secondary'>Add a New product</button>
            </div>
        </div>
    );
};

export default ManageProducts;