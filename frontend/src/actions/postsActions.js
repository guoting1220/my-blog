import { SAVE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes'

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

