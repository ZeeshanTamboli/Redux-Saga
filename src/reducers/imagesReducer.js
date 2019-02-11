import {
    IMAGES_LOAD,
    IMAGES_LOAD_SUCCESS,
    IMAGES_LOAD_FAILURE,
} from '../types';

const initialState = {
    images: [],
    loading: false,
    error: '',
};

export default function(state = initialState, action) {
    switch (action.types) {
        case IMAGES_LOAD:
            return {
                ...state,
                images: action.payload,
                loading: true,
            };
        case IMAGES_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
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
