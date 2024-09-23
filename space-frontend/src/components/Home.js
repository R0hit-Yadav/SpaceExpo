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
                <p>The solar system consists of the Sun and all the celestial bodies bound to it by gravity.</p>
                <p>This includes eight planets—Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune—each orbiting the Sun in elliptical paths. The solar system also contains dwarf planets like Pluto, moons, asteroids, comets, and the Kuiper Belt.</p>
           
            <div className="video-section">
                <h2>Explore Our Galaxy</h2>
                <video controls className="explore-video" autoPlay loop muted>
                    <source src="/static/images/Rocket.mp4" type="video/mp4" />
                </video>
                <h1>Rockets</h1>
                <p>Rockets are powerful vehicles designed to launch payloads—such as satellites, crew, or cargo—into space.</p>
                <p>They operate by expelling high-speed exhaust to propel themselves upward, overcoming Earth's gravity. Some notable rockets include SpaceX's Falcon 9, a reusable rocket designed for launching satellites and crewed missions; NASA's Saturn V, which famously carried astronauts to the Moon during the Apollo missions; and India’s PSLV and GSLV, used for launching satellites into polar and geosynchronous orbits.</p>
                <Link to="/rocket">
                <button className="know-more-button">Know More</button>
                </Link>
            </div>
            <div className="image-container">
                <img src="/static/images/News.png" alt="Life News Space" className="life-news-image" />
            </div>
            <div className="video-section">
                <h1>News & Updates</h1>                
                <p>Europa Clipper (NASA): Launching in October 2024 to study Jupiter's moon Europa for potential signs of life</p>
                <p>Axiom Mission 3: A private crew visited the International Space Station in 2024</p>
                <p>Aditya-L1 (India): Continues its mission to study solar activity from the Earth-Sun L1 point​</p>
                <p>Peregrine Lander: A propellant leak led to the mission's failure, resulting in re-entry into Earth's atmosphere in January</p>
                <Link to="/news">
                <button className="know-more-button">Know More</button>
                </Link>
            </div>
        </div>
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <h2>Links</h2>
                        <ul>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/rocket">Rockets</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h2>Social Media</h2>
                        <ul>
                            <li><a href="https://www.instagram.com/spaceexpo/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/spaceexpo/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.youtube.com/spaceexpo" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="https://www.twitter.com/spaceexpo/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                <p className="footer-copyright"> 2023 SpaceExpo. All rights reserved.</p>
            </footer>
        </div>
    </div>
    );
    }
export default Home;
