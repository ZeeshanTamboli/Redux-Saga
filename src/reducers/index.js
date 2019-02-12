import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import statsReducer from './statsReducer';

export default combineReducers({
    images: imagesReducer,
    imageStats: statsReducer,
});
