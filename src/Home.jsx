import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const response = await axios.get('http://localhost:3001/verify');
                if (response.data.authenticated) {
                    setUserData(response.data.user);
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Authentication error:', error);
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        verifyAuth();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3001/logout');
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Home</h1>
            {userData && (
                <div>
                    <p>Welcome, {userData.name}!</p>
                    <p>Email: {userData.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default Home;
