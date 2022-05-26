import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    };

    const makeAdmin = email => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error("You are not an admin")
            }
            return res.json()
        }).then(data => {
            if (data.modifiedCount > 0) {
                toast.success(`Successfully made ${email} an admin`)
                refetch()
            }
        })
    }

    const handleDelete = email => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            toast.success(`Deleted ${email} successfully`);
            refetch();
        })
    }
    return (
        <div>
            <h2>All users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.admin ? <button className='btn btn-disabled text-black btn-xs px-3'>Admin</button> : <button onClick={() => makeAdmin(user.email)} className='btn btn-secondary btn-xs text-white px-3'>Make Admin</button>
                                    }
                                </td>
                                <td>
                                    <label htmlFor={user.email} className='btn btn-error btn-xs px-3 text-white'>Delete User</label>
                                </td>
                                <input type="checkbox" id={user.email} class="modal-toggle" />
                                <div class="modal">
                                    <div class="modal-box flex flex-col">
                                        <h2 className='text-center text-2xl'>Are You sure you want to delete</h2>
                                        <h2 className='text-center text-xl text-primary'>{user.email}</h2>
                                        <div className='mx-auto mt-7'>
                                            <label onClick={() => handleDelete(user.email)} for={user.email} class="btn btn-secondary text-white btn-sm px-5">Yes</label>
                                            <label for={user.email} class="ml-2 btn-sm px-5 btn btn-error text-white">No</label>
                                        </div>
                                    </div>
                                </div>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;