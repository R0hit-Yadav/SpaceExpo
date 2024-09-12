import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AiButton.css';

const AiButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ai'); 
    };

    return (
        <div className="ai-button" onClick={handleClick}>
            AI
        </div>
    );
};

export default AiButton;
