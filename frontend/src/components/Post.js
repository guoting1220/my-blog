import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import PostDetail from './PostDetail';
import './Post.css';
import PostForm from './PostForm';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Post = () => {
  const posts = useSelector(store => store.posts);
  const { postId } = useParams();
  const post = posts[postId];
  const comments = post.comments;

  const [isEditing, setIsEditing] = useState(false);

  const history = useHistory();

  const reDirect = () => {
    history.push(`/${postId}`);
    setIsEditing(false);
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className="Post">
      {isEditing
        ? <PostForm
          initialFormData={post}
          id={postId}
          reDirect={reDirect}
        />
        : <PostDetail
          post={post}
          id={postId}
          toggleEdit={toggleEdit}
        />
      }
      <hr />
      <br />
      <h3>Comments</h3>
      <CommentList postId={postId} comments={comments} />
      <CommentForm postId={postId} />
    </div>
  )
}

export default Post;