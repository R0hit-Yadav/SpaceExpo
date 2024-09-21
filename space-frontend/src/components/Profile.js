import React, { useState, useEffect } from 'react';
import api from '../api';
import './Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/api/user/');
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
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


