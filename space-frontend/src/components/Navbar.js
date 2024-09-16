import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        axios.get('/api/profile/')
            .then((response) => {
                if (response.data.username) {
                    setUsername(response.data.username);
                }
            })
            .catch(() => {
                setUsername(null);
            });
    }, []);

    const handleLogout = () => {
        axios.post('/api/logout/')
            .then(() => {
                setUsername(null);
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">SpaceExpo</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/planet">Planet</Link></li>
                <li><Link to="/about">About</Link></li>
                {username ? (
                    <>
                        <li>{username}</li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/signup-login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
