import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import notesReducer from './notesReducer/reducer';
import todosReducer from './todosReducer/reducer';
import appReducer from './appReducer/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  notes: notesReducer,
  todos: todosReducer,
});

export type TAppState = ReturnType<typeof rootReducer>;

const store: Store<TAppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
