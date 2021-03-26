import axios from 'axios';
import { FETCH_TITLES, SAVE_TITLE, DELETE_TITLE } from './actionTypes';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


/* "thunk" action reactor */
/* fetch titles from API, then update the state titles in store */
export const fetchTitlesFromAPI = () => (
  async (dispatch) => {
    const { data } = await axios.get(`${API_URL}`);
    return dispatch(getTitltes(data));
  }
)

/* normal action creators  */
const getTitltes = (titles) => (
  {
    type: FETCH_TITLES,
    titles
  }
)

// export const saveTitle = (titleData) => (
//   {
//     type: SAVE_TITLE,
//     titleData
//   })


// export const deleteTitle = (id) => (
//   {
//     type: DELETE_TITLE,
//     id
//   }
// )


/* **************************************************** */
/* the version without backend DB */
/* **************************************************** */

// import { SAVE_TITLE, DELETE_TITLE } from './actionTypes';

// export const saveTitle = (titleData) => (
//   {
//     type: SAVE_TITLE,
//     titleData
//   })


// export const deleteTitle = (id) => (
//   {
//     type: DELETE_TITLE,
//     id
//   }
// )
