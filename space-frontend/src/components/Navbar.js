import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import api from '../api';

const Navbar = () => {

    const Login1 = () => {
        return (<>
            <li><Link onClick={()=>setExtra(<Logout />)} to="/login">Login</Link></li>
            {/* <li><Link to="/register">Register</Link></li> */}
        </>)}

    const Logout = () => {
        return (<> 
            <li><Link to="/profile">Profile</Link></li>
        <li>
            <Link onClick={()=>setExtra(<Login1 />)} to={'/logout'}>Logout</Link>
        </li>
        </>)}
        
    const [userDetail, setUserDetail] = useState({}) 

    const [extra, setExtra] = useState(<Login1 />)
    // const [methode,setmethode] = useState("login")
    useEffect( () => {
        if(localStorage.getItem('access')){
            getUser()
            setExtra(<Logout />)
            // setmethode("logout")
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
                {extra}
            </ul>
        </nav>
);
}
export default Navbar;