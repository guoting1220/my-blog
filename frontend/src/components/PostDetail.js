import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deletePostFromAPI } from '../actions/postsActions';
import './PostDetail.css';
import Votes from './Votes';


const PostDetail = ({ post, id, toggleEdit }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const remove = async () => {
    await dispatch(deletePostFromAPI(id));
    history.push("/");
  }

  return (
    <div className="PostDetail">
      <div>
        <h2>{post.title}</h2>
        <br></br>
        <p>{post.description}</p>
        <br></br>
        <div>{post.body}</div>
      </div>

      <div className="PostDetail-right">
        <div className="PostDetail-editArea">
          <i className="fas fa-edit editBtn" onClick={toggleEdit}></i>
          <i className="fas fa-times deleteBtn" onClick={remove}></i>
        </div>
        <div className="PostDetail-votes">          
          <Votes postId={id} votes={post.votes} />
        </div>        
      </div>
    </div>
  )
}

export default PostDetail;