import { fromJS } from 'immutable';
import {
    REDUCER_NAME,
    ADD_LINER,
    SET_LINERS_DATA,
    SET_AUTHORS_DATA,
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION
} from './constants';

const initialState = fromJS({
    liners: [],
    linersCount: 0,
    authors: [],
    notifications: []
})

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LINERS_DATA:
            return state.set('liners', fromJS([...state.get('liners'), ...action.payload.data]))

        case SET_AUTHORS_DATA:
            return state.set('authors', action.payload.data)

        case ADD_LINER:
            return state.set("liners", state.get('liners').push(action.payload.data));

        case ADD_NOTIFICATION:
            let notification = {
                id: state.get('notifications')
                    .toJS()
                    .reduce((largest, current) => Math.max(largest, current.id), 0) + 1,
                ...action.payload.data
            }
            return state.set(
                "notifications",
                fromJS(
                    state
                    .get('notifications')
                    .push(notification)
                )
            );

        case DELETE_NOTIFICATION:
            return state.set(
                "notifications",
                fromJS(
                    state
                    .get('notifications')
                    .filter(notification => notification.id !== action.payload.data.id)
                )
            );

        default:
            return state
    }
}


export const getAppState = state => {
    if (state[REDUCER_NAME]) {
        return state[REDUCER_NAME];
    } else {
        return initialState;
    }
};



export default AppReducer;
