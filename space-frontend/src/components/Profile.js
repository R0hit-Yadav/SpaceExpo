import React, { useState, useEffect } from 'react';
import './Profile.css';
import api from '../api';

const Profile = () => {
    const [userData, setUserData] = useState({});

    const getUser = async () => {
        const response = await api.get('/api/user/');
        setUserData(response.data)
      }
      useEffect(()=> {getUser()},[])

    return (
        <div className="profile-container">
            <h2 className="profile-heading">Profile</h2>
            <p className="profile-info">Username: {userData.username}</p>
            <p className="profile-info">Email: {userData.email}</p>
        </div>
    );
};

export default Profile;

