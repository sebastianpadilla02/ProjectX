import { useState} from 'react';
import './index.css';

const apiURL = 'http://localhost:8083';

interface CommentComposerProps {
  tweetId: string;
  userId: string;
  activateComment: boolean;
  setActivateComment: (value: boolean) => void;
  setActiveCommentComposer: (value: string | null) => void;
}

const CommentComposer = ({ tweetId, userId, activateComment, setActivateComment, setActiveCommentComposer }: CommentComposerProps) => {
  const [commentText, setCommentText] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    const tweet_id = tweetId;
    const user_id = userId;
    e.preventDefault();
    if (commentText.trim()) {
      console.log('Comment posted:', commentText);

      const url = `${apiURL}/api/tweets/comments`;
      console.log('tweet_id:', tweet_id, ' user_id:', user_id);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token') || ''
        },
        body: JSON.stringify({
          comment: commentText,
          tweetId: tweet_id
        })
      });

      const responseData = await response.json();

      console.log(responseData);
      if (response.ok) {
        console.log('Comment posted successfully:', responseData);
        setCommentText('');
        setActivateComment(!activateComment);
        setActiveCommentComposer(null);
      }
    }
  };

  return (
    <div className="comment-composer">
      <div className="comment-composer-inner">
        <img 
          src="./src/assets/user.png" 
          alt="Profile" 
          className="profile-image"
        />
        <form className="composer-content" onSubmit={handleSubmit}>
          <textarea
            placeholder="Type your comment here"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button 
            type="submit"
            className="post-button"
            disabled={!commentText.trim()}
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentComposer;