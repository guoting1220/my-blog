import { FETCH_TITLES, ADD_POST, DELETE_POST, UPDATE_POST, VOTE } from '../actions/actionTypes';


function sortByVote(posts) {
  return posts.sort((a, b) => b.votes - a.votes);
}

function makeTitleFromPost({ id, title, description, votes }) {
  return { id, title, description, votes };
}

export default function titlesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TITLES: {
      return sortByVote([...action.titles]).map(title => ({ ...title }));
    }

    case ADD_POST: {
      return sortByVote([...state.map(
        titile => ({ ...titile })), makeTitleFromPost(action.postData)]);
    }

    case DELETE_POST: {
      return state.filter(
        title => title.id !== action.id).map(title => ({ ...title }));
    }

    case UPDATE_POST: {
      return state.map(title => title.id === action.postData.id
        ? makeTitleFromPost(action.postData)
        : ({ ...title }));
    }

    case VOTE: {
      return sortByVote(state.map(title =>
        title.id === action.postId
          ? { ...title, votes: action.votes }
          : { ...title }
      ))
    }


    default:
      return state;
  }
}




/* **************************************************** */
/* the version without backend DB */
/* **************************************************** */

// import { SAVE_TITLE, DELETE_TITLE} from '../actions/actionTypes'

// const INITIAL_STATE = JSON.parse(localStorage.getItem("titles")) || {};

// export default function titlesReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {

//     case SAVE_TITLE: {
//       const titlesCopy = {};
//       Object.keys(state).forEach(id => (titlesCopy[id] = {...state[id]}));
//       const {id, ...titleInfo} = action.titleData;
//       titlesCopy[id] = titleInfo;
//       localStorage.setItem("titles", JSON.stringify(titlesCopy));
//       return titlesCopy;
//     }

//     case DELETE_TITLE: {
//       const titlesCopy = {};
//       Object.keys(state).forEach(id => (titlesCopy[id] = { ...state[id] }));
//       delete titlesCopy[action.id];
//       localStorage.setItem("titles", JSON.stringify(titlesCopy));
//       return titlesCopy;
//     }

//     default:
//       return state;
//   }
// }