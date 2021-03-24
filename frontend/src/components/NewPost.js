import React from 'react';
import { useHistory } from "react-router-dom";
import PostForm from './PostForm';

const NewPost = () => {
  const history = useHistory();

  const reDirect = () => {
    history.push("/");
  }

  return (
    <PostForm reDirect={reDirect} />
  )
}

export default NewPost;