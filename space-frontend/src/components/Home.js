import React, { useEffect } from 'react';
import './Home.css';
import Carousel from './Carousel';
import SolarSystem from '../3D models/SolarSystem';
const Home = () => {
    
    
    return (
        <div>
            <Carousel />
            <div className="home-content">
                <h1>Welcome to SpaceExpo</h1>
                <p>Explore the wonders of the universe!</p>
                <SolarSystem/>
                <h1>Solar System</h1>
            </div>
        </div>
    );
}
export default Home;
