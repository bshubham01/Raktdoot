import React, { useState, useEffect, useRef } from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { timestamp } from "../../firebase/config";
import { useFirestore } from "../../hooks/useFirestore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Avatar from "../../components/Avatar";
import pro from "../Profile/profile.png";
import { useDocument } from "../../hooks/useDocument";
import "./PostComments.css";


export default function PostComments({ post }) {
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("communityPosts");
  const { document, error } = useDocument("users", user.uid);
  const [newComment, setNewComment] = useState("");
  const commentsRef = useRef(null);


   // Scroll to the bottom of comments on update
   useEffect(() => {
    if (commentsRef.current) {
      commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
    }
  }, [post.comments]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      userId: user.uid,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
      profileURL: document.profileURL,
      name: document.name
    };

    await updateDocument(post.id, {
      comments: [...post.comments, commentToAdd]
    });

    if (!response.error) {
      setNewComment('');

    }

  };


  return (
    <div className="project-comments">
      <h4>Comments</h4>

      <ul ref={commentsRef} id='commentsId'   className={post && post.comments && post.comments.length === 0 ? "nocomment" : "comments"}>
        {post && post.comments && post.comments.length > 0 && post.comments.map((comment) => (
          <li key={comment.id}>
            <div className="comment-author">
              <Avatar src={comment.profileURL ? comment.profileURL : pro} />
              <p>{comment.name}</p>
            </div>

            <div className="comment-content">
              <p>{comment.content}</p>
            </div>

            <div className="comment-date">
              <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</p>
            </div>

          </li>
        ))}
      </ul>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            required
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}
