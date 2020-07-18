import { notes, todos } from './../../utils/testData';
import { initAppReducerAC } from './actions';
import { initNotes } from '../notesReducer/thunks';
import { initTodos } from '../todosReducer/thunks';
import { TAppReducerThunks } from './types';
import { arrayToObject } from '../../utils/functions';
import { TNotes, TNote } from '../notesReducer/types';
import { TTodos, TTodo } from '../todosReducer/types';

/**
 * Инициализируем приложение, устанавливаем актуальный стэйт
 */
export const initApp = (): TAppReducerThunks => async (dispatch) => {
  /**
   * По хорошему здесь запрос на сервер, забираем от туда заметки и задания,
   * но сервера нет, поэтому ,берем тестовые данные, с помощью функции преобразуем
   * массивы данных в ассоциативные массивы (ключами являются id)
   */
  const notesObj: TNotes = arrayToObject<TNote>(notes);
  const todosObj: TTodos = arrayToObject<TTodo>(todos);
  dispatch(initNotes(notesObj));
  dispatch(initTodos(todosObj));
  dispatch(initAppReducerAC(true));
};
