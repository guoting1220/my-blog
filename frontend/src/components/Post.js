import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import PostDetail from './PostDetail';
import './Post.css';
import PostForm from './PostForm';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { getPostFromAPI, updatePostInAPI } from '../actions/postsActions';

const Post = () => {
  const posts = useSelector(store => store.posts);
  const postId = +(useParams().postId);
  const post = posts[postId];
  // const comments = post.comments;
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  /* if the post is not in store, fetch it from API */
  useEffect(() => {
    const getPost = async () => {
      await dispatch(getPostFromAPI(postId));
    };
    if (!post) getPost();
  },
    // [dispatch, post, postId]

    // if include "post" in the dependencies, when delete a post, the post changes, will run the function inside useEffect again, therefore dispatch the FETCH_POST, and return undefined:"", error

    [dispatch, postId]
  );

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }

  const update = ({ title, description, body }) => {
    dispatch(updatePostInAPI(postId, title, description, body));
    toggleEdit();
  }

  const cancel = () => {
    history.push(`/${postId}`);
    setIsEditing(false);
  }


  if (!post) return <p>No post yet!</p>

  return (
    <div className="Post">
      {isEditing
        ? <PostForm
          initialFormData={post}
          save={update}
          cancel={cancel}
          title="Edit Post"
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
      <CommentList postId={postId} comments={post.comments} />
      <CommentForm postId={postId} />
    </div>
  )
}

export default Post;