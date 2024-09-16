    import React, { useState,useEffect } from 'react';
    import axios from 'axios';

    const SpaceNews = () => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); 

    const NASA_API_KEY = 'HCgMmdNrzBBEaqzBsTc5oqqJnj8gumhdmr1AFSZQ';
    const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`;

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching new data
        axios.get(NASA_APOD_URL)
        .then(response => {
            setNews(response.data);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    }, [date]);  // Re-fetch data when the date changes

    const handlePreviousDay = () => {
        const previousDate = new Date(date);
        previousDate.setDate(previousDate.getDate() - 1); // Go back one day
        setDate(previousDate.toISOString().split('T')[0]); // Update the date state
    };

    const handleNextDay = () => {
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1); // Go forward one day
        if (nextDate <= new Date()) { // Ensure the next date doesn't exceed today
        setDate(nextDate.toISOString().split('T')[0]);
        }
    };

    if (loading) return <div>Loading space news...</div>;
    if (error) return <div>Error fetching space news: {error.message}</div>;

    return (
        <div>
        <h1>{news.title}</h1>
        <p>{news.explanation}</p>
        {news.media_type === "image" ? (
            <img src={news.url} alt={news.title} style={{ width: "100%", maxWidth: "600px", height: "auto" }} />
        ) : (
            <iframe title={news.title} width="560" height="315" src={news.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )}
        <p><strong>Date:</strong> {news.date}</p>

        {/* Buttons to navigate between dates */}
        <div style={{ marginTop: '20px' }}>
            <button onClick={handlePreviousDay}>Previous Day</button>
            <button onClick={handleNextDay} disabled={date === new Date().toISOString().split('T')[0]}>Next Day</button>
        </div>
        </div>
    );
    };

    export default SpaceNews;