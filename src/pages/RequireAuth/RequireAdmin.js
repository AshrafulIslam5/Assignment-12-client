import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [UserFromDB, setUserFromDB] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`).then(res => res.json()).then(data => setUserFromDB(data))
    }, [email]);

    const { role } = UserFromDB;

    if (loading || setUserFromDB.length === 0) {
        return <Spinner></Spinner>
    }
    if (!user || role !== 'admin') {
        return <Navigate to="/login" state={{ from: location }} replace />
    }


    return children;
};

export default RequireAdmin;