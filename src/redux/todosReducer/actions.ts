import {
  ETodoActionsTypes,
  TCreateTodoAC,
  TDeleteTodoAC,
  TTodo,
  TInitTodosAC,
  TUpdateTodoTextAC,
  TChangeTodoComplitedAC,
  TMakeOldTodoAC,
  TTodos,
} from './types';

export const initTodosAC = (todos: TTodos): TInitTodosAC => ({
  type: ETodoActionsTypes.INIT_TODOS,
  todos,
});

export const createTodoAC = (todo: TTodo): TCreateTodoAC => ({
  type: ETodoActionsTypes.CREATE_TODO,
  todo,
});

export const updateTodoTextAC = (todoId: string, text: string): TUpdateTodoTextAC => ({
  type: ETodoActionsTypes.UPDATE_TODO_TEXT,
  todoId,
  text,
});

export const changeTodoComplitedAC = (todoId: string): TChangeTodoComplitedAC => ({
  type: ETodoActionsTypes.CHANGE_TODO_COMPLITED,
  todoId,
});

export const deleteTodoAC = (todoId: string): TDeleteTodoAC => ({
  type: ETodoActionsTypes.DELETE_TODO,
  todoId,
});

export const makeOldTodoAC = (todoId: string): TMakeOldTodoAC => ({
  type: ETodoActionsTypes.MAKE_OLD_TODO,
  todoId,
});
