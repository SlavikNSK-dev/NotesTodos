import { v1 as uuidv1 } from 'uuid';
import { TTodosThunks, TTodo, TTodos } from './types';
import {
  createTodoAC,
  deleteTodoAC,
  changeTodoComplitedAC,
  updateTodoTextAC,
  makeOldTodoAC,
  initTodosAC,
} from './actions';

export const initTodos = (todos: TTodos): TTodosThunks => async (dispatch) => {
  dispatch(initTodosAC(todos));
};

export const createTodo = (noteId: string, text: string): TTodosThunks => async (dispatch) => {
  const newTodo: TTodo = {
    id: uuidv1(),
    noteId,
    complited: false,
    text,
    isNew: true,
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
