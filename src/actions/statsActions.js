import { STATS_LOAD, STATS_LOAD_SUCCESS, STATS_LOAD_FAILURE } from '../types';

export const loadImageStats = id => {
    return {
        type: STATS_LOAD,
        payload: id,
    };
};

export const setImageStats = (id, downloads) => {
    return {
        type: STATS_LOAD_SUCCESS,
        payload: {
            id,
            downloads,
        },
    };
};

export const setImageStatsError = id => {
    return {
        type: STATS_LOAD_FAILURE,
        payload: id,
    };
};
