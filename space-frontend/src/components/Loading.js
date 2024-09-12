import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Loading.css'; // Assuming you have a separate CSS file for styles

const LoadingWrapper = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500); // Adjust the time as needed
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {loading && <Loading />}
            {children}
        </>
    );
};

const Loading = () => (
    <div className="loading-container">
        <div className="rocket-icon" style={flyAnimation}>
            🚀
        </div>
    </div>
);

// Define the flyAnimation here
const flyAnimation = {
    animation: 'fly 1s linear infinite',
    fontSize: '50px',
};

export default LoadingWrapper;
