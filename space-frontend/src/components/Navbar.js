import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import api from '../api';

const Navbar = () => {
    const [userDetail, setUserDetail] = useState({}); 
    
    useEffect(() => {
        if (localStorage.getItem('access')) {
            getUser();
        }        
    }, []);

    const getUser = async () => {
        try {
            const response = await api.get('/api/user/');
            setUserDetail(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        setUserDetail({});
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">SpaceExpo</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/planet">Planet</Link></li>
                <li><Link to="/about">About</Link></li>
                {userDetail && userDetail.username ? (
                    <>
                        <li>
                            <Link to="/profile">{userDetail.username}</Link>
                        </li>
                        <li>
                            <Link onClick={handleLogout} to="/">Logout</Link>
                        </li>
                    </>
                ) : (
                    <li><Link to="/login">Login/Register</Link></li> // Updated Link
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
