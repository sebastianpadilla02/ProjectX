import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import './index.css';
import TweetList from '../layout/maincontent/tweetlist';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-page">
            {/* Header */}
            <header className="profile-header">
                <div className="header-content">
                    <button 
                        className="back-button"
                        onClick={() => navigate('/home')}
                    >
                        <IoArrowBack />
                    </button>
                    <div className="header-user-info">
                        <h2>{localStorage.getItem('name')}</h2>
                    </div>
                </div>
            </header>

            {/* Profile Info */}
            <div className="profile-info">
                <div className="profile-banner"></div>
                <div className="profile-details">
                    <div className="profile-avatar-container">
                        <img 
                            src="./src/assets/user.png" 
                            alt="Profile" 
                            className="profile-avatar"
                        />
                    </div>
                </div>
                <div className="profile-names">
                    <h2 className="profile-name">{localStorage.getItem('name')}</h2>
                    <span className="profile-username">@{localStorage.getItem('username')}</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="profile-tabs">
                <button className="tab active">Posts</button>
            </div>

            {/* Tweets */}
            <div className="profile-tweets">
                <TweetList />
            </div>
        </div>
    );
}

export default Profile;