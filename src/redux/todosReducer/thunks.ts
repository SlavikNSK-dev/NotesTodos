import { updateTodoTextAC, changeTodoComplitedAC, deleteTodoAC, initTodosAC, createTodoAC, makeOldTodoAC, deleteAllTodosByNoteIdAC } from './actions';
import { TTodo } from './types';

export const initTodos = (todos: TTodo[]) => async (dispatch: any) => {
  await dispatch(initTodosAC(todos));
};

export const createTodo = (todo: TTodo) => async (dispatch: any) => {
  await dispatch(createTodoAC(todo));
};

export const makeOldTodo = (todoId: string) => async (dispatch: any) => {
  await dispatch(makeOldTodoAC(todoId));
};

export const updateTodoText = (todoId: string, text: string) => async (dispatch: any) => {
  await dispatch(updateTodoTextAC(todoId, text));
};

export const changeTodoComplited = (todoId: string) => async (dispatch: any) => {
  await dispatch(changeTodoComplitedAC(todoId));
};

export const deleteTodo = (todoId: string) => async (dispatch: any) => {
  await dispatch(deleteTodoAC(todoId));
};

export const deleteAllTodosByNoteId = (noteId: string) => async (dispatch: any) => {
  await dispatch(deleteAllTodosByNoteIdAC(noteId));
};
