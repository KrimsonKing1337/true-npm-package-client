import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import { counterReducer, watchCounterActions } from './counter';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  counter: counterReducer,
};

const middleware = [
  sagaMiddleware,
];

export const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(watchCounterActions);

export type RootState = ReturnType<typeof store.getState>;
