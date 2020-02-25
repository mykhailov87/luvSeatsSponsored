// Core
import { all, call } from 'redux-saga/effects';
// Watchers
import { homeWatcher } from '../../core/home/saga/watchers';

export function* rootSaga() {
  yield all([
    call(homeWatcher),
  ]);
}
