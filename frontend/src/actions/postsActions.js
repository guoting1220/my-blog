import axios from 'axios';
import { FETCH_POST, ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

/* get post action */
/* get post from API, then add to the state store */
export const getPostFromAPI = (id) => (
  async (dispatch) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(data))
  }
)

const getPost = (post) => (
  {
    type: FETCH_POST,
    post
  }
);


/* add post action */
/* send new post to API, and add to the state in store. */
export const sendPostToAPI = (title, description, body) => (
  async (dispatch) => {
    const { data } = await axios.post(`${API_URL}`, {
      title,
      description,
      body
    });
    return dispatch(addPost(data));
  }
)

const addPost = (postData) => (
  {
    type: ADD_POST,
    postData
  }
);


/* update post action */
/* update the post, and update the state in store */
export const updatePostInAPI = (id, title, description, body) => (
  async (dispatch) => {
    const { data } = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body
    });
    return dispatch(updatePost(data));
  }
)

const updatePost = (postData) => (
  {
    type: UPDATE_POST,
    postData
  }
);


/* delete post action */
/* delete the post from API, and remove from the state in store */
export const deletePostFromAPI = (id) => (
  async (dispatch) => {
    await axios.delete(`${API_URL}/${id}`);
    return dispatch(deletePost(id));
  }
)

const deletePost = (id) => (
  {
    type: DELETE_POST,
    id
  }
);



/* add comment action */
/* add comment to API, and add to the state in store */
export const sendCommentToAPI = (postId, text) => (
  async (dispatch) => {
    const { data } = await axios.post(`${API_URL}/${postId}/comments/`, {
      postId, 
      text
    });
    return dispatch(addComment(postId, data))
  }
)

const addComment = (postId, commentData) => (
  {
    type: ADD_COMMENT,
    postId,
    commentData
  }
);


/* delete comment action */
/* delete the post from API, and remove from the state in store */
export const deleteCommentFromAPI = (postId, commentId) => (
  async (dispatch) => {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(deleteComment(commentId));
  }
)

const deleteComment = (commentId) => (
  {
    type: DELETE_COMMENT,
    commentId
  }
);

/* **************************************************** */
/* the version without backend DB */
/* **************************************************** */

/* import { SAVE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'

export const savePost = (postData) => (
  {
    type: SAVE_POST,
    postData
  }
);

export const deletePost = (id) => (
  {
    type: DELETE_POST,
    id
  }
);

export const addComment = (postId, commentData) => (
  {
    type: ADD_COMMENT,
    postId,
    commentData
  }
);

export const deleteComment = (postId, commentId) => (
  {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
);
 */
