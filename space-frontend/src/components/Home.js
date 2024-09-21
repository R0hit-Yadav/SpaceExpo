import React, { useEffect } from 'react';
import './Home.css';
import Carousel from './Carousel';
import Navbar from './Navbar';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Home = () => {
    
    
    return (
        <div>
            <Carousel />
            <div className="home-content">
                <h1>Welcome to SpaceExpo</h1>
                <p>Explore the wonders of the universe!</p>
            </div>
        </div>
    );
}

export default Home;
