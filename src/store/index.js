import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import heroes from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    heroes,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
