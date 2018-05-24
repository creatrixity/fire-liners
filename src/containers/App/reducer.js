import { fromJS } from 'immutable';
import { SET_LINERS_DATA } from './constants';

const initialState = fromJS({
    liners: []
})

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LINERS_DATA:
            return state.set('liners', action.payload.data)

        default:
            return state
    }
}

export const getAppState = (state) => {
  if (state.get('liners')) {
    return state.get('liners');
  } else {
    return initialState;
  }
};


export default AppReducer;
