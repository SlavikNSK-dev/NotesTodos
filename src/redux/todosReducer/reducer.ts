import { TTodosState, TTodosActions, ETodoActionsTypes } from './types';

const initialState: TTodosState = {
  todos: {
    byId: {},
    allIds: [],
  },
};

const todosReducer = (state = initialState, action: TTodosActions): TTodosState => {
  switch (action.type) {
    case ETodoActionsTypes.INIT_TODOS: {
      return {
        ...state,
        todos: action.todos,
      };
    }

    case ETodoActionsTypes.CREATE_TODO: {
      return {
        ...state,
        todos: {
          byId: {
            ...state.todos.byId,
            [action.todo.id]: action.todo,
          },
          allIds: [...state.todos.allIds, action.todo.id],
        },
      };
    }

    case ETodoActionsTypes.UPDATE_TODO_TEXT: {
      return {
        ...state,
        todos: {
          byId: {
            ...state.todos.byId,
            [action.todoId]: {
              ...state.todos.byId[action.todoId],
              text: action.text,
            },
          },
          allIds: [...state.todos.allIds],
        },
      };
    }

    case ETodoActionsTypes.CHANGE_TODO_COMPLITED: {
      return {
        ...state,
        todos: {
          byId: {
            ...state.todos.byId,
            [action.todoId]: {
              ...state.todos.byId[action.todoId],
              complited: !state.todos.byId[action.todoId].complited,
            },
          },
          allIds: [...state.todos.allIds],
        },
      };
    }

    case ETodoActionsTypes.DELETE_TODO: {
      return {
        ...state,
        todos: {
          byId: { ...state.todos.byId },
          allIds: [...state.todos.allIds.filter((id) => id !== action.todoId)],
        },
      };
    }
    case ETodoActionsTypes.MAKE_OLD_TODO: {
      return {
        ...state,
        todos: {
          byId: {
            ...state.todos.byId,
            [action.todoId]: {
              ...state.todos.byId[action.todoId],
              isNew: false,
            },
          },
          allIds: [...state.todos.allIds],
        },
      };
    }

    default:
      return state;
  }
};

export default todosReducer;
