import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get('/api/profile/')
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div className="profile-container">
            <h2 className="profile-heading">Profile</h2>
            <p className="profile-info">Username: {userData.username}</p>
            <p className="profile-info">Email: {userData.email}</p>
        </div>
    );
};

export default Profile;
