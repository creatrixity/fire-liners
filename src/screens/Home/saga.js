import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getLinersData, getAuthorsData } from '../../services/DataService';
import { ADD_LINERS_REQUEST, ADD_AUTHORS_REQUEST, ADD_LINER_REQUEST } from './constants';
import { SET_LINERS_DATA, SET_AUTHORS_DATA, ADD_LINER } from '../../containers/App/constants';

export function* fetchLiners (payload) {
    const response = yield call(getLinersData, payload.data);
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

export function* addLiner (data) {
    return yield put({
        type: ADD_LINER,
        payload: data
    })
}

/**
 * We process only the latest action
 */
export default function* root() {
  yield all([
    takeLatest(ADD_LINERS_REQUEST, fetchLiners),
    takeLatest(ADD_AUTHORS_REQUEST, fetchAuthors),
    takeLatest(ADD_LINER_REQUEST, addLiner)
  ]);
}
