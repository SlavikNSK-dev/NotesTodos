import { TNotes, TNotesActions, ENoteActionsTypes } from './types';

const initialState: TNotes = {
  byId: {},
  allIds: [],
};

const notesReducer = (state = initialState, action: TNotesActions): TNotes => {
  switch (action.type) {
    case ENoteActionsTypes.INIT_NOTES: {
      return {
        ...state,
        ...action.notes,
      };
    }

    case ENoteActionsTypes.CREATE_NOTE: {
      return {
        ...state,
        byId: {
          [action.note.id]: action.note,
          ...state.byId,
        },
        allIds: [action.note.id, ...state.allIds],
      };
    }

    case ENoteActionsTypes.UPDATE_NOTE_TITLE: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.noteId]: {
            ...state.byId[action.noteId],
            title: action.title,
          },
        },
      };
    }

    case ENoteActionsTypes.DELETE_NOTE: {
      const newById = { ...state.byId };
      delete newById[action.noteId];

      return {
        ...state,
        byId: newById,
        allIds: [...state.allIds.filter((id) => id !== action.noteId)],
      };
    }

    case ENoteActionsTypes.MAKE_OLD_NOTE: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.noteId]: {
            ...state.byId[action.noteId],
            isNew: false,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default notesReducer;
