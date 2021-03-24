import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteComment} from '../actions/postsActions'
import './Comment.css';

const Comment = ({ id, postId, commentContent}) => {
  const dispatch = useDispatch();

  const removeComment = () => dispatch(deleteComment(postId, id));

  return (
    <div className="Comment">
      <i className="fas fa-times deleteBtn" onClick={removeComment}></i>
      <p className="Comment-content">{commentContent}</p>
    </div>
  )
}

export default Comment;