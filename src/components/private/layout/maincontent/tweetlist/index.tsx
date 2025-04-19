import './index.css';
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface Tweet {
  likes: number;
  _id: string;
  content: string;
  user: {
    _id: string;
    name: string;
    username: string;
  };
  comments: string[];
  createdAt: string;
}

const apiURL = 'http://localhost:8083';

const TweetList = () => {
  const [likedTweets, setLikedTweets] = useState<number[]>([]);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const url = `${apiURL}/api/tweets/`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-access-token': localStorage.getItem('token') || '',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setTweets(data.data);
    };

    fetchTweets();
  }, []);

  const handleDeleteTweet = async (tweetId: string, userId: string) => {
    console.log('Deleting tweet with ID:', tweetId);
    console.log('User ID:', userId);

    const url = `${apiURL}/api/tweets`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'x-access-token': localStorage.getItem('token') || '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tweetId,
        userId
      })
    });
    if (response.ok) {
      setTweets(prevTweets => prevTweets.filter(tweet => tweet._id !== tweetId));
    }
  }

  
  // const tweets: Tweet[] = [
  //   {
  //     id: 1,
  //     username: "C.",
  //     handle: "@LoremIpsum",
  //     content: "Amigos, celébrense TODO, cosas grandes o pequeñas, apláudanse, felicítense por lo mucho o lo poco. Solo ustedes saben lo que les costó y lo que les ha costado",
  //     timestamp: "Apr 13",
  //     likes: 22000,
  //     replies: 7,
  //   },
  //   // Puedes agregar más tweets aquí
  // ];

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
        // const isLiked = likedTweets.includes(tweet._id);
        if(tweet.user.username === localStorage.getItem('username')){
          return (
            <article key={tweet._id} className="tweet">
              <img 
                src="/avatar.png" 
                alt={tweet.user.username} 
                className="tweet-avatar"
              />
              <div className="tweet-content">
                <div className="tweet-header">
                  <span className="tweet-name">{tweet.user.username}</span>
                  <span className="tweet-dot">·</span>
                  <span className="tweet-time">{tweet.createdAt}</span>
                </div>
                <p className="tweet-text">{tweet.content}</p>
                <div className="tweet-stats">
                  <button className="tweet-stat">
                    <FaRegComment className="stat-icon" />
                    {/* <span className="stat-number">{formatNumber(tweet.replies)}</span> */}
                  </button>
                  <button 
                    // className={`tweet-stat ${isLiked ? 'liked' : ''}`}
                    // onClick={() => handleLike(tweet.id)}
                  >
                    {/* {isLiked ? (
                      <FaHeart className="stat-icon" />
                    ) : (
                      <FaRegHeart className="stat-icon" />
                    )}
                    <span className="stat-number">
                      {formatNumber(isLiked ? tweet.likes + 1 : tweet.likes)}
                    </span> */}
                  </button>
                  <button className='delete-tweet' type='button' onClick={() => handleDeleteTweet(tweet._id, tweet.user._id)}>
                    <span className="delete-tweet-text">Delete</span>
                    <span className="delete-tweet-icon">🗑️</span>
                  </button>
                </div>
              </div>
            </article>
          );
        }
      })}
    </div>
  );
};

export default TweetList;