import React, { useState } from 'react';
import './SignupBox.css';
import CustomButton from './Common/CustomButton.jsx';
import CustomInput from './Common/CustomInput.jsx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupBox() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Basic validation
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters long');
            }

            const response = await axios.post(
                'https://mernstack-be-24wo.onrender.com/register',
                { name, email, password }
            );

            console.log('Registration response:', response);

            if (response.data.success || response.status === 201) {
                // Optionally store token if your backend provides it on registration
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/home');
                } else {
                    navigate('/login');
                }
            } else {
                setError(response.data.error || 'Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError(
                err.message || 
                err.response?.data?.error || 
                'An error occurred during registration'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-box container mt-5">
            <h2 className="text-center">Sign Up</h2>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <CustomInput 
                    name={"userName"} 
                    label={"Username"} 
                    type={"text"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    required
                    minLength={2}
                />
                <CustomInput 
                    name={"email"} 
                    label={"Email"} 
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                />
                <CustomInput 
                    name={"password"} 
                    label={"Password"} 
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                    minLength={6}
                />
                <CustomButton 
                    label={loading ? "Signing up..." : "Sign Up"}
                    type={"submit"}
                    disabled={loading}
                />
            </form>
            <p>Already Have an Account? <Link to="/login">Log in</Link></p>
        </div>
    );
}

export default SignupBox;
