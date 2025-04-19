import { useState } from 'react';
import './index.css';

const apiURL = 'http://localhost:8083';

const TweetComposer = () => {
  const [tweetText, setTweetText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (tweetText.trim()) {
      console.log('Tweet posted:', tweetText);

      // Aquí puedes agregar la lógica para enviar el tweet al servidor
      const data = {
        content: tweetText
      }

      const url = `${apiURL}/api/tweets`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token') || ''
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      console.log(responseData);
      if (response.ok) {
        console.log('Tweet posted successfully:', responseData);
        setTweetText('');
      }
    }
  };

  return (
    <div className="tweet-composer">
      <div className="tweet-composer-inner">
        <img 
          src="./src/assets/user.png" 
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