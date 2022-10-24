import { createStore, combineReducers } from 'redux';

import { initialState } from './initialState';
import { postsReducer } from './postsRedux';

const subReducers = {
  posts: postsReducer,
};

const reducer = combineReducers(subReducers);
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
