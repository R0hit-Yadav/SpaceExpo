// SignupLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import './SignupLogin.css';

const SignupLogin = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const toggleForm = () => setIsSignup(!isSignup);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });
            setMessage(response.data.message);
            if (response.data.message === 'Login successful') {
                localStorage.setItem('username', username);
                window.location.reload();
            }
        } catch (error) {
            setMessage('Invalid credentials');
        }
    };

    const handleSignup = async () => {
        console.log({ username, password, email, phone });
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signup/', { username, password, email, phone });
            setMessage(response.data.message);
            if (response.data.message === 'Signup successful') {
                toggleForm(); 
            }
        } catch (error) {
            console.error(error);
            setMessage('Signup failed');
        }
    };

    return (
        <div className="signup-login-container">
            <h2>{isSignup ? 'Signup' : 'Login'}</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            {isSignup && (
                <>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Phone Number" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                </>
            )}
            <button onClick={isSignup ? handleSignup : handleLogin}>
                {isSignup ? 'Signup' : 'Login'}
            </button>
            <p>{message}</p>
            <p onClick={toggleForm} className="toggle-form">
                {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Signup'}
            </p>
        </div>
    );
};

export default SignupLogin;
