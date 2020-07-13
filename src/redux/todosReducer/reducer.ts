import { TTodosState, TTodosActions } from './types';

const initialState: TTodosState = {
  todos: [],
};

const todosReducer = (state = initialState, action: TTodosActions): TTodosState => {
  switch (action.type) {
    case 'INIT_TODOS': {
      return {
        ...state,
        todos: [...action.todos],
      };
    }

    case 'CREATE_TODO': {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }

    case 'MAKE_OLD_TODO': {
      return {
        ...state,
        todos: [
          ...state.todos.map((t) => {
            if (t.id === action.todoId) {
              return { ...t, isNew: false };
            }
            return t;
          }),
        ],
      };
    }

    case 'UPDATE_TODO_TEXT': {
      return {
        ...state,
        todos: [
          ...state.todos.map((t) => {
            if (t.id === action.todoId) {
              return { ...t, text: action.text };
            }
            return t;
          }),
        ],
      };
    }

    case 'CHANGE_TODO_COMPLITED': {
      return {
        ...state,
        todos: [
          ...state.todos.map((t) => {
            if (t.id === action.todoId) {
              return { ...t, complited: !t.complited };
            }
            return t;
          }),
        ],
      };
    }

    case 'DELETE_TODO': {
      return {
        ...state,
        todos: [...state.todos.filter((t) => t.id !== action.todoId)],
      };
    }

    case 'DELETE_ALL_TODOS_BY_NOTE_ID': {
      return {
        ...state,
        todos: [...state.todos.filter((t) => t.noteId !== action.noteId)],
      };
    }

    default:
      return state;
  }
};

export default todosReducer;
