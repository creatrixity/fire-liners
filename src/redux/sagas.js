import { all, fork } from 'redux-saga/effects';

import HomeScreenSaga from '../screens/Home/saga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(HomeScreenSaga)
  ]);
}
