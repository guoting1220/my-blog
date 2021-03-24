import { SAVE_TITLE, DELETE_TITLE} from '../actions/actionTypes'

const INITIAL_STATE = JSON.parse(localStorage.getItem("titles")) || {};

export default function titlesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_TITLE: {
      const titlesCopy = {};
      Object.keys(state).forEach(id => (titlesCopy[id] = {...state[id]}));
      const {id, ...titleInfo} = action.titleData;
      titlesCopy[id] = titleInfo;
      localStorage.setItem("titles", JSON.stringify(titlesCopy));
      return titlesCopy;
    }

    case DELETE_TITLE: {
      const titlesCopy = {};
      Object.keys(state).forEach(id => (titlesCopy[id] = { ...state[id] }));
      delete titlesCopy[action.id];
      localStorage.setItem("titles", JSON.stringify(titlesCopy));
      return titlesCopy;
    }

    default:
      return state;
  }
}