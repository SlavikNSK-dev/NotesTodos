import { TTodos, TTodosActions, ETodoActionsTypes } from './types';

const initialState: TTodos = {
  byId: {},
  allIds: [],
};

const todosReducer = (state = initialState, action: TTodosActions): TTodos => {
  switch (action.type) {
    case ETodoActionsTypes.INIT_TODOS: {
      return {
        ...state,
        ...action.todos,
      };
    }

    case ETodoActionsTypes.CREATE_TODO: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.todo.id]: action.todo,
        },
        allIds: [...state.allIds, action.todo.id],
      };
    }

    case ETodoActionsTypes.UPDATE_TODO_TEXT: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.todoId]: {
            ...state.byId[action.todoId],
            text: action.text,
          },
        },
      };
    }

    case ETodoActionsTypes.CHANGE_TODO_COMPLITED: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.todoId]: {
            ...state.byId[action.todoId],
            complited: !state.byId[action.todoId].complited,
          },
        },
      };
    }

    case ETodoActionsTypes.DELETE_TODO: {
      const newById = { ...state.byId };
      delete newById[action.todoId];

      return {
        ...state,
        byId: newById,
        allIds: [...state.allIds.filter((id) => id !== action.todoId)],
      };
    }
    case ETodoActionsTypes.MAKE_OLD_TODO: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.todoId]: {
            ...state.byId[action.todoId],
            isNew: false,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default todosReducer;
