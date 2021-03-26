import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCommentFromAPI} from '../actions/postsActions'
import './Comment.css';

const Comment = ({ postId, commentId, text}) => {
  const dispatch = useDispatch();

  const removeComment = async () => {
    await dispatch(deleteCommentFromAPI(postId, commentId));
  }

  return (
    <div className="Comment">
      <i className="fas fa-times deleteBtn" onClick={removeComment}></i>
      <p className="Comment-content">{text}</p>
    </div>
  )
}

export default Comment;