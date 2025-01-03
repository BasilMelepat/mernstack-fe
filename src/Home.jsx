import React, { useEffect, useState } from 'react';
import axios from './axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
        const verifyAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get('/verify');
                if (response.data.authenticated) {
                    setUserData(response.data.user);
                } else {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Authentication error:', error);
                localStorage.removeItem('token');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };
        verifyAuth();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
            localStorage.removeItem('token'); // Remove token even if logout fails
            navigate('/login');
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
