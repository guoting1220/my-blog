import { SAVE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from '../actions/actionTypes'

const INITIAL_STATE = JSON.parse(localStorage.getItem("posts")) || {};

export default function postsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_POST: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = { ...postsCopy[id].comments};
      });

      const { id, ...postContent } = action.postData;
      postsCopy[id] = postContent;
      postsCopy[id].comments = { ...postsCopy[id].comments } || {};

      localStorage.setItem("posts", JSON.stringify(postsCopy));
      return postsCopy;
    }

    case DELETE_POST: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = { ...postsCopy[id].comments };
      });

      delete postsCopy[action.id];

      localStorage.setItem("posts", JSON.stringify(postsCopy));
      return postsCopy;
    }

    case ADD_COMMENT: {
      const postsCopy = {};
      
      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = { ...postsCopy[id].comments, ...action.commentData };
      });
      
      localStorage.setItem("posts", JSON.stringify(postsCopy));
      return postsCopy;
    }

    case DELETE_COMMENT: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = {...postsCopy[id].comments};
      });

      delete postsCopy[action.postId].comments[action.commentId];

      localStorage.setItem("posts", JSON.stringify(postsCopy));
      return postsCopy;
    }

    default:
      return state;
  }
}