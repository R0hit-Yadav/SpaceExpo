import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/api/user/${localStorage.getItem('username')}/`);
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
            <p className="profile-info">Phone Number: {userData.phone}</p>
        </div>
    );
};

export default Profile;
