import { useState } from 'react';
import './index.css';

const TweetComposer = () => {
  const [tweetText, setTweetText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tweetText.trim()) {
      console.log('Tweet posted:', tweetText);
      setTweetText('');
    }
  };

  return (
    <div className="tweet-composer">
      <div className="tweet-composer-inner">
        <img 
          src="/avatar.png" 
          alt="Profile" 
          className="profile-image"
        />
        <form className="composer-content" onSubmit={handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
          <button 
            type="submit"
            className="post-button"
            disabled={!tweetText.trim()}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default TweetComposer;