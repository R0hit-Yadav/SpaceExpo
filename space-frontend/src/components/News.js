// SpaceNews.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';  

const SpaceNews = () => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const NASA_API_KEY = 'HCgMmdNrzBBEaqzBsTc5oqqJnj8gumhdmr1AFSZQ';
    const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`;

    useEffect(() => {
        setLoading(true);
        axios.get(NASA_APOD_URL)
            .then(response => {
                setNews(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [NASA_APOD_URL]);

    const handlePreviousDay = () => {
        const previousDate = new Date(date);
        previousDate.setDate(previousDate.getDate() - 1);
        setDate(previousDate.toISOString().split('T')[0]);
    };

    const handleNextDay = () => {
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        if (nextDate <= new Date()) {
            setDate(nextDate.toISOString().split('T')[0]);
        }
    };

    if (loading) return <div className="space-news-container">Loading space news...</div>;
    if (error) return <div className="space-news-container">Error fetching space news: {error.message}</div>;

    return (
        <div className="space-news-container">
            <h1>{news.title}</h1>
            <p>{news.explanation}</p>
            {news.media_type === "image" ? (
                <img src={news.url} alt={news.title} />
            ) : (
                <iframe
                    title={news.title}
                    width="560"
                    height="315"
                    src={news.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
            <p><strong>Date:</strong> {news.date}</p>

            <div className="button-container">
                <button onClick={handlePreviousDay}>Previous Day</button>
                <button onClick={handleNextDay} disabled={date === new Date().toISOString().split('T')[0]}>
                    Next Day
                </button>
            </div>
        </div>
    );
};

export default SpaceNews;
