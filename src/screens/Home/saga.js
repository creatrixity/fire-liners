import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getLinersData } from '../../services/DataService';
import { ADD_LINERS_REQUEST } from './constants';
import { SET_LINERS_DATA } from '../../containers/App/constants';

export function* fetchLiners (payload) {
    const response = yield call(getLinersData);
    return yield put({
        type: SET_LINERS_DATA,
        payload: {
            data: response
        }
    })
}

/**
 * We process only the latest action
 */
export default function* root() {
  yield all([
    takeLatest(ADD_LINERS_REQUEST, fetchLiners),
  ]);
}
