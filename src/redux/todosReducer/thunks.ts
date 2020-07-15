import { v1 as uuidv1 } from 'uuid';
import {
  updateTodoTextAC,
  changeTodoComplitedAC,
  deleteTodoAC,
  initTodosAC,
  createTodoAC,
  makeOldTodoAC,
  deleteAllTodosByNoteIdAC,
} from './actions';
import { TTodo, TTodosThunks } from './types';

export const initTodos = (todos: TTodo[]): TTodosThunks => async (dispatch) => {
  dispatch(initTodosAC(todos));
};

export const createTodo = (noteId: string, todoText: string): TTodosThunks => async (dispatch) => {
  const newTodo: TTodo = {
    id: uuidv1(),
    noteId: noteId,
    text: todoText,
    isNew: true,
    complited: false,
  };
  dispatch(createTodoAC(newTodo));
};

export const makeOldTodo = (todoId: string): TTodosThunks => async (dispatch) => {
  dispatch(makeOldTodoAC(todoId));
};

export const updateTodoText = (todoId: string, text: string): TTodosThunks => async (dispatch) => {
  dispatch(updateTodoTextAC(todoId, text));
};

export const changeTodoComplited = (todoId: string): TTodosThunks => async (dispatch) => {
  dispatch(changeTodoComplitedAC(todoId));
};

export const deleteTodo = (todoId: string): TTodosThunks => async (dispatch) => {
  dispatch(deleteTodoAC(todoId));
};

export const deleteAllTodosByNoteId = (noteId: string): TTodosThunks => async (dispatch) => {
  dispatch(deleteAllTodosByNoteIdAC(noteId));
};
