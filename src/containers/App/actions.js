import { ADD_NOTIFICATION_REQUEST, DELETE_NOTIFICATION_REQUEST } from './constants';

export const deleteNotification = data => {
    return {
        type: DELETE_NOTIFICATION_REQUEST,
        data
    }
}

export const addNotification = data => {
    return {
        type: ADD_NOTIFICATION_REQUEST,
        data
    }
}
