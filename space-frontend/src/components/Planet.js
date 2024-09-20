import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Planet.css';

const Planet = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/planets/')
            .then(res => setPlanets(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="planet-container">  
            <video autoPlay loop muted>
            <source src="/static/images/mitors.mp4" type="video/mp4" />
            </video>
            {planets.map(planet => (
                <div key={planet.id} className="planet-card">
                    <img src={`${planet.image}`} alt={planet.name} />
                    <h2>{planet.name}</h2>
                    <p>{planet.info}</p>
                    <Link to={`/${planet.name.toLowerCase()}`}>
                        <button className="know-more-button">Know More</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Planet;
