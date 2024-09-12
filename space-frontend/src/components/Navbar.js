import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   
    return (
        <nav className="navbar">
            <div className="navbar-brand">SpaceExpo</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/planet">Planet</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signup-login">Login</Link></li>
            </ul>
        </nav>
    );

}
export default Navbar;
