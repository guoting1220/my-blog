import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addComment } from '../actions/postsActions';
import './CommentForm.css'; 

const CommentForm = ({ postId}) => {
  const [commentContent, setCommentContent] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommentContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentId = uuid();
    const newCommentData = {
      [newCommentId]: commentContent
    }
    dispatch(addComment(postId, newCommentData));
    setCommentContent("");
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="commentContent"
          value={commentContent}
          placeholder="New Comment"
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default CommentForm;