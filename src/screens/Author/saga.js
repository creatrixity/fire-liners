import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getAuthorLinersData, getAuthorsData } from '../../services/DataService';
import { ADD_AUTHOR_LINERS_REQUEST, ADD_AUTHORS_REQUEST } from './constants';
import { SET_LINERS_DATA, SET_AUTHORS_DATA } from '../../containers/App/constants';

export function* fetchAuthorLiners (payload) {
    const response = yield call(getAuthorLinersData, payload.data);
    return yield put({
        type: SET_LINERS_DATA,
        payload: {
            data: response
        }
    })
}

export function* fetchAuthors (payload) {
    const response = yield call(getAuthorsData);
    return yield put({
        type: SET_AUTHORS_DATA,
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
    takeLatest(ADD_AUTHOR_LINERS_REQUEST, fetchAuthorLiners),
    takeLatest(ADD_AUTHORS_REQUEST, fetchAuthors),
  ]);
}
