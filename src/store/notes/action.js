import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './type';

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};
// export const editNote = appSettings => {
//   return {
//     type: SET_APP_SETTINGS,
//     payload: appSettings,
//   };
// };

// export const DeleteNote = language => {
//   return {
//     type: SET_LANGUAGE,
//     payload: language,
//   };
// };
