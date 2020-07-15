import { notes, todos } from './../../utils/testData';
import { initAppReducerAC } from './actions';
import { initNotes } from '../notesReducer/thunks';
import { initTodos } from '../todosReducer/thunks';
import { TAppReducerThunks } from './types';

export const initApp = (): TAppReducerThunks => async (dispatch) => {
  /**
   * По хорошему здесь запрос на сервер, забираем от туда заметки и задания,
   * но сервера нет, поэтому ,берем тестовые данные
   */
  dispatch(initNotes(notes));
  dispatch(initTodos(todos));
  // Исткуственно имитируем задержку с сервера
  setTimeout(async () => {
    dispatch(initAppReducerAC(true));
  }, 1000);
};
