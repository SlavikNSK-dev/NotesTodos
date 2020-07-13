import {
  TTodo,
  TCreateTodoAC,
  TUpdateTodoTextAC,
  TChangeTodoComplitedAC,
  TDeleteTodoAC,
  TDeleteAllTodosByNoteIdAC,
  TInitTodoAC,
  TMakeOldTodoAC,
} from './types';

export const initTodosAC = (todos: TTodo[]): TInitTodoAC => ({
  type: 'INIT_TODOS',
  todos,
});

export const createTodoAC = (todo: TTodo): TCreateTodoAC => ({
  type: 'CREATE_TODO',
  todo,
});

export const makeOldTodoAC = (todoId: string): TMakeOldTodoAC => ({
  type: 'MAKE_OLD_TODO',
  todoId,
});

export const updateTodoTextAC = (todoId: string, text: string): TUpdateTodoTextAC => ({
  type: 'UPDATE_TODO_TEXT',
  todoId,
  text,
});

export const changeTodoComplitedAC = (todoId: string): TChangeTodoComplitedAC => ({
  type: 'CHANGE_TODO_COMPLITED',
  todoId,
});

export const deleteTodoAC = (todoId: string): TDeleteTodoAC => ({
  type: 'DELETE_TODO',
  todoId,
});

export const deleteAllTodosByNoteIdAC = (noteId: string): TDeleteAllTodosByNoteIdAC => ({
  type: 'DELETE_ALL_TODOS_BY_NOTE_ID',
  noteId,
});
