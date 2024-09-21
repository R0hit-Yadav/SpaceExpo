import React, { useState } from 'react';
import api from '../api';
import './Form.css'; // Import the CSS file

const Form = ({ route, method, onSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(route, { username, password });
            onSuccess(response.data); // Call the success handler
        } catch (error) {
            console.error('Login error:', error);
            // Check for specific error and alert the user
            if (error.response && error.response.status === 401) {
                alert('Login not possible: User does not exist or credentials are incorrect.');
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Form;
