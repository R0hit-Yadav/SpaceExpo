import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="video-section">
                <h2>Explore Our Galaxy</h2>
                <video controls className="explore-video" autoPlay loop muted>
                    <source src="/static/images/Rocket.mp4" type="video/mp4" />
                </video>
                <h1>Rockets</h1>
                <Link to="/rocket">
                <button className="know-more-button">Know More</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;
