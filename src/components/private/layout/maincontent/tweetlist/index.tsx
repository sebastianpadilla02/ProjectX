import './index.css';
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import CommentComposer from './commentcomposer';
import CommentList from './commentlist';
import TweetComposer from '../tweetcomposer';

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
  const [likedTweets, setLikedTweets] = useState<string[]>([]);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [activeCommentComposer, setActiveCommentComposer] = useState<string | null>(null);
  const [activateTweetComposer, setActivateTweetComposer] = useState(false);
  const [deleteTweet, setDeleteTweet] = useState(false);
  const [activateComment, setActivateComment] = useState(false);

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
      if (response.ok) {
        const data = await response.json();
        setTweets(data.data);
      }
    };

    fetchTweets();
  }, [activateTweetComposer, deleteTweet, activateComment]);

  const handleDeleteTweet = async (tweetId: string, userId: string) => {
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
      
    }
    setDeleteTweet(!deleteTweet);
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const handleLike = async (tweetId: string) => {
    const url = `${apiURL}/api/tweets/likes`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'x-access-token': localStorage.getItem('token') || '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tweetId
      })
    });

    if (response.ok) {
      setLikedTweets(prevLikedTweets => {
        if (prevLikedTweets.includes(tweetId)) {
          return prevLikedTweets.filter(id => id !== tweetId);
        } else {
          return [...prevLikedTweets, tweetId];
        }
      });
    }
  };

  return (
    <div>
      {
        window.location.pathname === '/home' && (
          <TweetComposer setActivateTweetComposer={setActivateTweetComposer} activateTweetComposer={activateTweetComposer} />
        )
      }
    
      <div className="tweet-list">
        {tweets.map(tweet => {
          const isLiked = likedTweets.includes(tweet._id);
          if(tweet.user.username === localStorage.getItem('username')){
            return (
              <article key={tweet._id} className="tweet">
                <img 
                  src="./src/assets/user.png"
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
                    <button className="tweet-stat" type="button" onClick={() =>  setActiveCommentComposer(activeCommentComposer === tweet._id ? null : tweet._id)}>
                      <FaRegComment className="stat-icon" />
                      <span className="stat-number">{formatNumber(tweet.comments.length)}</span>
                    </button>
                    <button 
                      className={`tweet-stat ${isLiked ? 'liked' : ''}`}
                      onClick={isLiked ? undefined : () => handleLike(tweet._id)}
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
                    <button className='delete-tweet' type='button' onClick={() => handleDeleteTweet(tweet._id, tweet.user._id)}>
                      <span className="delete-tweet-text">Delete</span>
                      <span className="delete-tweet-icon">🗑️</span>
                    </button>
                  </div>
                  <>
                    {activeCommentComposer === tweet._id && (
                      <CommentComposer tweetId={tweet._id} userId={tweet.user._id} 
                      activateComment={activateComment} setActivateComment={setActivateComment}
                      setActiveCommentComposer={setActiveCommentComposer}/>
                    )
                    }
                  </>
                  <>
                    {tweet.comments.length > 0 ? (
                      <CommentList comments={tweet.comments} />
                    ) : (undefined)
                    }
                  </>
                </div>
              </article>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TweetList;