import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCommentToAPI } from '../actions/postsActions';
import './CommentForm.css'; 

const CommentForm = ({ postId}) => {
  const [commentText, setCommentText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommentText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sendCommentToAPI(postId, commentText));
    setCommentText("");
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="commentContent"
          value={commentText}
          placeholder="New Comment"
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default CommentForm;