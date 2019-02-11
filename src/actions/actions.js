import {
    IMAGES_LOAD,
    IMAGES_LOAD_SUCCESS,
    IMAGES_LOAD_FAILURE,
} from '../types';

export const loadImages = () => {
    return {
        type: IMAGES_LOAD,
    };
};

export const setImages = images => {
    return {
        type: IMAGES_LOAD_SUCCESS,
        payload: images,
    };
};

export const setError = error => {
    return {
        type: IMAGES_LOAD_FAILURE,
        payload: error,
    };
};
