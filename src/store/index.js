import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga)

export default store;
