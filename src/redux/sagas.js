import { all, fork } from 'redux-saga/effects';

import AppSaga from '../containers/App/saga';
import HomeScreenSaga from '../screens/Home/saga';
import AuthorScreenSaga from '../screens/Author/saga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(AppSaga),
    fork(HomeScreenSaga),
    fork(AuthorScreenSaga),
  ]);
}
