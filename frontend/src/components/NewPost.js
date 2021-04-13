import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import PostForm from './PostForm';
import { sendPostToAPI } from '../actions/postsActions';


const NewPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cancel = () => {
    history.push("/");
  }

  const save = async ({ title, description, body }) => {
    await dispatch(sendPostToAPI(title, description, body));
    history.push("/");
  }

  return (
    <PostForm save={save} cancel={cancel} title="New Post"/>
  )
}

export default NewPost;