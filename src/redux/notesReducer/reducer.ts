import { TNotesState, TNotesActions, ENoteActionsTypes } from './types';

const initialState: TNotesState = {
  notes: {
    byId: {},
    allIds: [],
  },
};

const notesReducer = (state = initialState, action: TNotesActions): TNotesState => {
  switch (action.type) {
    case ENoteActionsTypes.INIT_NOTES: {
      return {
        ...state,
        notes: action.notes,
      };
    }

    case ENoteActionsTypes.CREATE_NOTE: {
      return {
        ...state,
        notes: {
          byId: {
            [action.note.id]: action.note,
            ...state.notes.byId,
          },
          allIds: [action.note.id, ...state.notes.allIds],
        },
      };
    }

    case ENoteActionsTypes.UPDATE_NOTE_TITLE: {
      return {
        ...state,
        notes: {
          ...state.notes,
          byId: {
            ...state.notes.byId,
            [action.noteId]: {
              ...state.notes.byId[action.noteId],
              title: action.title,
            },
          },
        },
      };
    }

    case ENoteActionsTypes.DELETE_NOTE: {
      return {
        ...state,
        notes: {
          ...state.notes,
          allIds: [...state.notes.allIds.filter((id) => id !== action.noteId)],
        },
      };
    }

    case ENoteActionsTypes.MAKE_OLD_NOTE: {
      return {
        ...state,
        notes: {
          ...state.notes,
          byId: {
            ...state.notes.byId,
            [action.noteId]: {
              ...state.notes.byId[action.noteId],
              isNew: false,
            },
          },
        },
      };
    }

    default:
      return state;
  }
};

export default notesReducer;
