import {
    IMAGES_LOAD,
    IMAGES_LOAD_SUCCESS,
    IMAGES_LOAD_FAILURE,
} from '../types';

const initialState = {
    images: [],
    loading: false,
    error: '',
    pageNumber: 1,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case IMAGES_LOAD:
            return {
                ...state,
                loading: true,
            };
        case IMAGES_LOAD_SUCCESS:
            return {
                ...state,
                images: action.payload,
                loading: false,
                pageNumber: state.pageNumber + 1,
            };
        case IMAGES_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
