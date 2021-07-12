// import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './type';

// const initialState = {
//   notes: [],
// };

// export default function note(state = initialState, action) {
//   // return {
//   //     ...state,
//   //     user: action.payload,
//   //   };
//   switch (action.type) {
//     case ADD_NOTE: {
//       const notesArray = notes?.push(action.payload);

//       return {
//         ...state,
//         notes: notesArray,
//       };
//     }

//     // case EDIT_NOTE:
//     //   return {
//     //     ...state,
//     //     appSettings: action.payload,
//     //   };

//     // case DELETE_NOTE:
//     //   return {
//     //     ...state,
//     //     isLoggedIn: true,
//     //     user: action.payload.user,
//     //     token: action.payload.access_token,
//     //     //if user object exist, make it null
//     //     //remove token also
//     //   };

//     default:
//       return state;
//   }
// }

import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from './type';

//ar
//en
const initialState = {
  notes: [],
};

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }

    case EDIT_NOTE: {
      let notesArray = [...state.notes];
      let objIndex = notesArray.findIndex(obj => obj.id === action.payload.id);
      notesArray[objIndex].title = action.payload.title;
      notesArray[objIndex].description = action.payload.description;

      return {
        ...state,
        notes: notesArray,
      };
    }

    case DELETE_NOTE: {
      let filteredArray = state.notes.filter(
        item => action.payload !== item.id,
      );
      return {
        ...state,
        notes: filteredArray,
      };
    }

    default:
      return state;
  }
}
