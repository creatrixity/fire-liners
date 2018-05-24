import { getLinersData } from '../../services/DataService';
import { ADD_LINER, ADD_LINERS_REQUEST, ADD_LINERS } from './constants';

export const fetchLiners = (id = null) => {
  return dispatch => {
    getLinersData(id).then(response => {
      if (id) {
        dispatch(addLiner(response));
      } else {
        dispatch(addLiners(response));
      }
    });
  };
};

export const fetchLinersRequest = data => {
    return {
        type: ADD_LINERS_REQUEST,
        data
    }
}

export const addLiner = data => {
    return {
        type: ADD_LINER,
        data
    }
}

export const addLiners = data => {
    return {
        type: ADD_LINERS,
        data
    }
}
