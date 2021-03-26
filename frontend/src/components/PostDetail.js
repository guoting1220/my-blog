import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deletePostFromAPI } from '../actions/postsActions';
import './PostDetail.css';


const PostDetail = ({post, id, toggleEdit}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const remove = async () => {
    await dispatch(deletePostFromAPI(id));
    history.push("/");
  }

  return (
    <div className="PostDetail">
      <div className="PostDetail-title">
        <h2>{post.title}</h2>
        <div className="PostDetail-btns">
          <i className="fas fa-edit editBtn" onClick={toggleEdit}></i>
          <i className="fas fa-times deleteBtn" onClick={remove}></i>
        </div>
      </div>
      <p>{post.description}</p>
      <div className="PostDetail-body">{post.body}</div>
    </div>
  )
}

export default PostDetail;