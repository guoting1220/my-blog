import { SAVE_TITLE, DELETE_TITLE } from './actionTypes';

export const saveTitle = (titleData) => (
  {
    type: SAVE_TITLE,
    titleData
  })


export const deleteTitle = (id) => (
  {
    type: DELETE_TITLE,
    id
  }
)
