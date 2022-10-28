import { createStore, combineReducers } from 'redux';

import { initialState } from './initialState';
import { postsReducer } from './postsRedux';
import { categoriesReducer } from './categoriesRedux';

const subReducers = {
  posts: postsReducer,
  categories: categoriesReducer,
};

const reducer = combineReducers(subReducers);
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
