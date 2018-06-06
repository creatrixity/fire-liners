import { fromJS } from 'immutable';
import { REDUCER_NAME, ADD_LINER, SET_LINERS_DATA, SET_AUTHORS_DATA } from './constants';

const initialState = fromJS({
    liners: [],
    authors: []
})

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LINERS_DATA:
            return state.set('liners', fromJS([...state.get('liners'), ...action.payload.data]))

        case SET_AUTHORS_DATA:
            return state.set('authors', action.payload.data)

        case ADD_LINER:
            console.log(action.payload.data);
            return state.set("liners", state.get('liners').push(action.payload.data));

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
