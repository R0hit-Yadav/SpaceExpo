import React from 'react';
import './Home.css';
import Carousel from './Carousel';

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
