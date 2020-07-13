export type TTodo = {
  id: string;
  noteId: string;
  complited: boolean;
  text: string;
  isNew?: boolean;
};

// Initial state type
export type TTodosState = {
  todos: TTodo[];
};

// Action creators types
export type TInitTodoAC = {
  type: 'INIT_TODOS';
  todos: TTodo[];
};

export type TCreateTodoAC = {
  type: 'CREATE_TODO';
  todo: TTodo;
};

export type TMakeOldTodoAC = {
  type: 'MAKE_OLD_TODO';
  todoId: string;
};

export type TUpdateTodoTextAC = {
  type: 'UPDATE_TODO_TEXT';
  todoId: string;
  text: string;
};

export type TChangeTodoComplitedAC = {
  type: 'CHANGE_TODO_COMPLITED';
  todoId: string;
};

export type TDeleteTodoAC = {
  type: 'DELETE_TODO';
  todoId: string;
};

export type TDeleteAllTodosByNoteIdAC = {
  type: 'DELETE_ALL_TODOS_BY_NOTE_ID';
  noteId: string;
};

export type TTodosActions =
  | TInitTodoAC
  | TCreateTodoAC
  | TMakeOldTodoAC
  | TUpdateTodoTextAC
  | TChangeTodoComplitedAC
  | TDeleteTodoAC
  | TDeleteAllTodosByNoteIdAC;
