import { all,spawn } from 'redux-saga/effects';
 
import MainSaga from './userSaga';

const rootSaga = function* rootSaga() {
  yield spawn(MainSaga);
};

export default rootSaga;
