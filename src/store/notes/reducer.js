import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './type';

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
