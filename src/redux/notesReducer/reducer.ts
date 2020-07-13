import { TNotesState, TNotesActions } from './types';

const initialState: TNotesState = {
  notes: [],
};

const notesReducer = (state = initialState, action: TNotesActions): TNotesState => {
  switch (action.type) {
    case 'INIT_NOTES': {
      return {
        ...state,
        notes: [...action.notes],
      };
    }

    case 'CREATE_NOTE': {
      return {
        ...state,
        notes: [action.note, ...state.notes],
      };
    }

    case 'MAKE_OLD_NOTE': {
      return {
        ...state,
        notes: [
          ...state.notes.map((n) => {
            if (n.id === action.noteId) {
              return { ...n, isNew: false };
            }
            return n;
          }),
        ],
      };
    }

    case 'UPDATE_NOTE_TITLE': {
      return {
        ...state,
        notes: [
          ...state.notes.map((n) => {
            if (n.id === action.noteId) {
              return { ...n, title: action.title };
            }
            return n;
          }),
        ],
      };
    }

    case 'DELETE_NOTE': {
      return {
        ...state,
        notes: [...state.notes.filter((n) => n.id !== action.noteId)],
      };
    }

    default:
      return state;
  }
};

export default notesReducer;
