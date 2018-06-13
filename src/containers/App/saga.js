import { all, put, takeLatest } from 'redux-saga/effects';
import {
    ADD_NOTIFICATION,
    ADD_NOTIFICATION_REQUEST,
    DELETE_NOTIFICATION,
    DELETE_NOTIFICATION_REQUEST
} from './constants';

export function* addNotification (payload) {
    return yield put({
        type: ADD_NOTIFICATION,
        payload
    })
}

export function* deleteNotification (payload) {
    return yield put({
        type: DELETE_NOTIFICATION,
        payload
    })
}

/**
 * We process only the latest action
 */
export default function* root() {
  yield all([
    takeLatest(ADD_NOTIFICATION_REQUEST, addNotification),
    takeLatest(DELETE_NOTIFICATION_REQUEST, deleteNotification)
  ]);
}
