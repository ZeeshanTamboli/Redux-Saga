import { STATS_LOAD, STATS_LOAD_SUCCESS, STATS_LOAD_FAILURE } from '../types';

const initialState = {
    isLoading: false,
    downloads: null,
    error: false,
    id: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case STATS_LOAD:
            return {
                ...state,
                isLoading: true,
                downloads: null,
                error: false,
                id: action.payload,
            };
        case STATS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                downloads: action.payload.downloads,
                id: action.payload.id,
                error: false,
            };
        case STATS_LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                downloads: null,
                error: true,
                id: action.payload,
            };
        default:
            return state;
    }
}
