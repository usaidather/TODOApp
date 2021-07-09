import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from './Type';

//ar
//en
const initialState = {
  notes: [],
};

export default function note(state = initialState, action) {
  // return {
  //     ...state,
  //     user: action.payload,
  //   };
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...notes, action.payload],
      };

    // case EDIT_NOTE:
    //   return {
    //     ...state,
    //     appSettings: action.payload,
    //   };

    // case DELETE_NOTE:
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //     user: action.payload.user,
    //     token: action.payload.access_token,
    //     //if user object exist, make it null
    //     //remove token also
    //   };

    default:
      return state;
  }
}
