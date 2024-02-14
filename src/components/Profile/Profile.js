// Profile.js
import React from 'react';
import './Profile.css';
import Header from '../Header/Header.js';
import image from '../../assets/images/me.jpg';


const Profile = ({ profile }) => {
    return (
        <div className="profile relative">
            <div className="profile-text">
                <h1 className="uppercase text-5xl font-bold mb-5 dark:text-gray-600">{profile.name}</h1>
                <h2 className="text-3xl mb-5 text-gray-600 font-normal">{profile.title}</h2>
                <Header title="Profile" />
                <div className="text-1xl">{profile.summary}</div>
            </div>
        </div>
    );
};

export default Profile;
