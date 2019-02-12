import { STATS_LOAD, STATS_LOAD_SUCCESS, STATS_LOAD_FAILURE } from '../types';

const initialState = {
    isLoading: false,
    error: false,
    id: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case STATS_LOAD:
            return {
                ...state,
                [action.payload]: {
                    isLoading: true,
                    error: false,
                    id: action.payload,
                },
            };
        case STATS_LOAD_SUCCESS:
            return {
                ...state,
                [action.payload.id]: {
                    isLoading: false,
                    downloads: action.payload.downloads,
                    id: action.payload.id,
                    error: false,
                },
            };
        case STATS_LOAD_FAILURE:
            return {
                ...state,
                [action.payload]: {
                    isLoading: false,
                    downloads: 0,
                    error: true,
                    id: action.payload,
                },
            };
        default:
            return state;
    }
}
