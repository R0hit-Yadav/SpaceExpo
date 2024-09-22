import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Rocket.css';
import api from '../api';

const Planet = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        api.get('/rocket')
            .then(res => setRockets(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="rocket-container">  
            <video autoPlay loop muted>
            <source src="/static/images/stars.mp4" type="video/mp4" />
            </video>
            {rockets.map(rocket => (
                <div key={rocket.id} className="rocket-card">
                    <img src={`${rocket.image}`} alt={rocket.name} />
                    <h2>{rocket.name}</h2>
                    <Link to={rocket.name.toLowerCase().replace(/\s/g, '')}>
                        <button className="know-more-button">Know More</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Planet;

