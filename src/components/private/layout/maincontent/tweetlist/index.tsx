import './index.css';
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

interface Tweet {
  id: number;
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
}

const TweetList = () => {
  const [likedTweets, setLikedTweets] = useState<number[]>([]);

  const tweets: Tweet[] = [
    {
      id: 1,
      username: "C.",
      handle: "@LoremIpsum",
      content: "Amigos, celébrense TODO, cosas grandes o pequeñas, apláudanse, felicítense por lo mucho o lo poco. Solo ustedes saben lo que les costó y lo que les ha costado",
      timestamp: "Apr 13",
      likes: 22000,
      replies: 7,
    },
    // Puedes agregar más tweets aquí
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const handleLike = (tweetId: number) => {
    setLikedTweets(prev => 
      prev.includes(tweetId) 
        ? prev.filter(id => id !== tweetId)
        : [...prev, tweetId]
    );
  };

  return (
    <div className="tweet-list">
      {tweets.map(tweet => {
        const isLiked = likedTweets.includes(tweet.id);

        return (
          <article key={tweet.id} className="tweet">
            <img 
              src="/avatar.png" 
              alt={tweet.username} 
              className="tweet-avatar"
            />
            <div className="tweet-content">
              <div className="tweet-header">
                <span className="tweet-name">{tweet.username}</span>
                <span className="tweet-handle">{tweet.handle}</span>
                <span className="tweet-dot">·</span>
                <span className="tweet-time">{tweet.timestamp}</span>
              </div>
              <p className="tweet-text">{tweet.content}</p>
              <div className="tweet-stats">
                <button className="tweet-stat">
                  <FaRegComment className="stat-icon" />
                  <span className="stat-number">{formatNumber(tweet.replies)}</span>
                </button>
                <button 
                  className={`tweet-stat ${isLiked ? 'liked' : ''}`}
                  onClick={() => handleLike(tweet.id)}
                >
                  {isLiked ? (
                    <FaHeart className="stat-icon" />
                  ) : (
                    <FaRegHeart className="stat-icon" />
                  )}
                  <span className="stat-number">
                    {formatNumber(isLiked ? tweet.likes + 1 : tweet.likes)}
                  </span>
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default TweetList;