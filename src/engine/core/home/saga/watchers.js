// Core
import { all, call, takeEvery } from 'redux-saga/effects';
// Types
import { asyncTypes } from './asyncTypes';
// Workers
import { callGetDataWorker } from './workers';

function* watchGetData() {
  yield takeEvery(asyncTypes.GET_MAIN_POST_DATA_ASYNC, callGetDataWorker);
}

export function* homeWatcher() {
  yield all([
    call(watchGetData),
  ]);
}
