import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import api from '../api';

const Navbar = () => {
    const [userDetail, setUserDetail] = useState({}) 
    
    useEffect( () => {
        if(localStorage.getItem('access')){
            getUser()
        }        
    }, []);
    
    const getUser = async() => {
  
            const response = await api.get('/api/user/');
            setUserDetail(response.data)
        }
  
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">SpaceExpo</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/planet">Planet</Link></li>
                <li><Link to="/about">About</Link></li>
                {(userDetail && userDetail.username) ? (
                    <li>
                        <Link onClick={() => {setUserDetail({})}} to={'/logout'}>Logout</Link>
                    </li>
                ) : (
                    <>
                        <li><Link onClick={() => {setUserDetail({})}} to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
                
            </ul>
        </nav>
);
}
export default Navbar;

