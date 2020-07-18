import { TBaseThunk } from './../index';

export enum ETodoActionsTypes {
  INIT_TODOS = 'TODOS/INIT_TODOS',
  CREATE_TODO = 'TODOS/CREATE_TODO',
  UPDATE_TODO_TEXT = 'TODOS/UPDATE_TODO_TEXT',
  CHANGE_TODO_COMPLITED = 'TODOS/CHANGE_TODO_COMPLITED',
  DELETE_TODO = 'TODOS/DELETE_TODO',
  MAKE_OLD_TODO = 'TODOS/MAKE_OLD_TODO',
}

export type TTodo = {
  id: string;
  noteId: string;
  complited: boolean;
  text: string;
  isNew?: boolean;
};

export type TTodos = {
  byId: {
    [id: string]: TTodo;
  };
  allIds: string[];
};

// Типы экшенов
export type TInitTodosAC = {
  type: ETodoActionsTypes.INIT_TODOS;
  todos: TTodos;
};

export type TCreateTodoAC = {
  type: ETodoActionsTypes.CREATE_TODO;
  todo: TTodo;
};

export type TUpdateTodoTextAC = {
  type: ETodoActionsTypes.UPDATE_TODO_TEXT;
  todoId: string;
  text: string;
};

export type TChangeTodoComplitedAC = {
  type: ETodoActionsTypes.CHANGE_TODO_COMPLITED;
  todoId: string;
};

export type TDeleteTodoAC = {
  type: ETodoActionsTypes.DELETE_TODO;
  todoId: string;
};

export type TMakeOldTodoAC = {
  type: ETodoActionsTypes.MAKE_OLD_TODO;
  todoId: string;
};

// Общие типы для редюсера
export type TTodosActions =
  | TInitTodosAC
  | TCreateTodoAC
  | TUpdateTodoTextAC
  | TChangeTodoComplitedAC
  | TDeleteTodoAC
  | TMakeOldTodoAC;
export type TTodosThunks = TBaseThunk<TTodosActions>;
