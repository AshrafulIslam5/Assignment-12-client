import { useEffect, useState } from "react"

const useGetUserAndToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://stark-chamber-76919.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data.token);
                    localStorage.setItem('accessToken', data.token)
                })
        }
    }, [user]);

    return [token]
};

export default useGetUserAndToken;