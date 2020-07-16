import { combineReducers, createStore, applyMiddleware, Store, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import notesReducer from './notesReducer/reducer';
import todosReducer from './todosReducer/reducer';
import appReducer from './appReducer/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  notes: notesReducer,
  todos: todosReducer,
});

export type TAppState = ReturnType<typeof rootReducer>;

/**
 * Общий для всех редюсеров тип санки
 * @example type TAppReducerThunks = TBaseThunk<TAppReducerctions>
 */
export type TBaseThunk<A extends Action = Action, R = Promise<void>> = ThunkAction<
  R,
  TAppState,
  unknown,
  A
>;

const store: Store<TAppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
