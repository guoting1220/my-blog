import { FETCH_POST, ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, VOTE } from '../actions/actionTypes'


export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POST: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = [...postsCopy[id].comments].map(
          comment => ({ ...comment })
        );
      });

      postsCopy[action.post.id] = action.post;

      return postsCopy;
    }


    case ADD_POST: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = [...postsCopy[id].comments].map(
          comment => ({ ...comment })
        );
      });

      const id = action.postData.id;
      postsCopy[id] = action.postData;
      postsCopy[id].comments = [];

      return postsCopy;
    }

    case UPDATE_POST: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = [...postsCopy[id].comments].map(
          comment => ({ ...comment })
        );
      });

      const id = action.postData.id;
      postsCopy[id] = { ...postsCopy[id], ...action.postData};

      return postsCopy;
    }


    case DELETE_POST: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = [...postsCopy[id].comments].map(
          comment => ({ ...comment })
        );
      });

      delete postsCopy[action.id];

      return postsCopy;
    }


    case ADD_COMMENT: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = [...postsCopy[id].comments].map(
          comment => ({ ...comment })
        );
      });

      postsCopy[action.postId].comments = [
        ...postsCopy[action.postId].comments,
        action.commentData
      ]

      return postsCopy;
    }

    case DELETE_COMMENT: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = [...postsCopy[id].comments].filter(
          comment => (comment.id !== action.commentId)
        );
      });  

      return postsCopy;
    }

    case VOTE: {
      const postsCopy = {};

      Object.keys(state).forEach(id => {
        postsCopy[id] = { ...state[id] };
        postsCopy[id].comments = [...postsCopy[id].comments].map(
          comment => ({ ...comment })
        );
      });

      postsCopy[action.postId].votes = action.votes;

      return postsCopy;
    }

    default:
      return state;
  }
}


/* **************************************************** */
/* the version without backend DB */
/* **************************************************** */
// import { SAVE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from '../actions/actionTypes'

// const INITIAL_STATE = JSON.parse(localStorage.getItem("posts")) || {};

// export default function postsReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case SAVE_POST: {
//       const postsCopy = {};

//       Object.keys(state).forEach(id => {
//         postsCopy[id] = { ...state[id] };
//         postsCopy[id].comments = { ...postsCopy[id].comments};
//       });

//       const { id, ...postContent } = action.postData;
//       postsCopy[id] = postContent;
//       postsCopy[id].comments = { ...postsCopy[id].comments } ||{};

//       localStorage.setItem("posts", JSON.stringify(postsCopy));
//       return postsCopy;
//     }

//     case DELETE_POST: {
//       const postsCopy = {};

//       Object.keys(state).forEach(id => {
//         postsCopy[id] = { ...state[id] };
//         postsCopy[id].comments = { ...postsCopy[id].comments };
//       });

//       delete postsCopy[action.id];

//       localStorage.setItem("posts", JSON.stringify(postsCopy));
//       return postsCopy;
//     }

//     case ADD_COMMENT: {
//       const postsCopy = {};

//       Object.keys(state).forEach(id => {
//         postsCopy[id] = { ...state[id] };
//         postsCopy[id].comments = { ...postsCopy[id].comments, ...action.commentData };
//       });

//       localStorage.setItem("posts", JSON.stringify(postsCopy));
//       return postsCopy;
//     }

//     case DELETE_COMMENT: {
//       const postsCopy = {};

//       Object.keys(state).forEach(id => {
//         postsCopy[id] = { ...state[id] };
//         postsCopy[id].comments = {...postsCopy[id].comments};
//       });

//       delete postsCopy[action.postId].comments[action.commentId];

//       localStorage.setItem("posts", JSON.stringify(postsCopy));
//       return postsCopy;
//     }

//     default:
//       return state;
//   }
// }