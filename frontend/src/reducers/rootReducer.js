import { combineReducers } from 'redux';
import posts from './postsReducer';
import titles from './titlesReducer';

export default combineReducers ({
  posts,
  titles
})
