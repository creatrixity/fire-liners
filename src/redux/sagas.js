import { all, fork } from 'redux-saga/effects';

import HomeScreenSaga from '../screens/Home/saga';
import AuthorScreenSaga from '../screens/Author/saga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(HomeScreenSaga),
    fork(AuthorScreenSaga),
  ]);
}
