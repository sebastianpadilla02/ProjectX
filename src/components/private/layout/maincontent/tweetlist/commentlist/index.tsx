import './index.css';
import { useState, useEffect } from 'react';

interface Comment {
    _id:string
    comment: string;
    user: {
        _id: string;
        name: string;
        username: string;
    };
}

interface CommentListProps {
    comments: string[];
}

const CommentList = ({ comments }: CommentListProps) => {
    const [commentList, setCommentList] = useState<Comment[]>([]);

    useEffect(() => {
        setCommentList(comments as unknown as Comment[]);
    }, [comments]);

    return (
        <div className="comment-list">
            {commentList.map((comment, index) => (
                <article key={index} className="comment">
                    <img 
                        src="./src/assets/user.png"
                        alt="User Avatar" 
                        className="comment-avatar"
                    />
                    <div className="comment-content">
                        <div className="comment-header">
                            <span className="comment-name">{comment.user.username}</span>
                        </div>
                        <p className="comment-text">{comment.comment}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default CommentList;