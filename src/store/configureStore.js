import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunkMiddleware from 'redux-thunk';

import logger from 'redux-logger';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
}
