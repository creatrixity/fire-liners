import { ADD_LINER_REQUEST, ADD_AUTHOR_LINERS_REQUEST, ADD_LINERS_REQUEST, ADD_AUTHORS_REQUEST } from './constants';

export const fetchAuthorLinersRequest = data => {
    return {
        type: ADD_AUTHOR_LINERS_REQUEST,
        data
    }
}

export const fetchLinersRequest = data => {
    return {
        type: ADD_LINERS_REQUEST,
        data
    }
}

export const fetchAuthorsRequest = () => {
    return {
        type: ADD_AUTHORS_REQUEST
    }
}

export const addLiner = data => {
    return {
        type: ADD_LINER_REQUEST,
        data
    }
}
