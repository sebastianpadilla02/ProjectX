import { useState, useEffect } from 'react';
import './index.css';
import TweetList from '../layout/maincontent/tweetlist';
import TweetComposer from '../layout/maincontent/tweetcomposer';

const Profile = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="profile-container">
            <h1>{localStorage.getItem('name')}</h1>
            <p>@{localStorage.getItem('username')}</p> 
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => window.location.href = '/home'}>Home</button>
            <TweetComposer />
            <TweetList />
        </div>
    );
}

export default Profile;