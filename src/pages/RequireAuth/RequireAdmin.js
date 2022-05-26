import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();
    // const [UserFromDB, setUserFromDB] = useState([]);
    // const email = user?.email;
    // useEffect(() => {
    //     fetch(`http://localhost:5000/user/${email}`).then(res => res.json()).then(data => setUserFromDB(data))
    // }, [email]);

    // const { admin } = UserFromDB;

    

    if (loading || adminLoading) {
        return <Spinner></Spinner>
    }
    if (!user || !admin) {
        signOut(auth)
        localStorage.removeItem('accessToken')
        return <Navigate to="/login" state={{ from: location }} replace />
    }


    return children;
};

export default RequireAdmin;