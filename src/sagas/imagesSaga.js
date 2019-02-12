import { IMAGES_LOAD } from '../types';
import { setImages, setError } from '../actions/actions';
import { takeEvery, select, call } from 'redux-saga/effects';
import { fetchImages } from '../api/index';

const getPage = state => state.images.pageNumber;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);

        // dispatch images
        yield put(setImages(images));
    } catch (error) {
        // dispatch error
        yield put(setError(error));
    }
}

function* watchImagesLoad() {
    yield takeEvery(IMAGES_LOAD, handleImagesLoad);
}

export default watchImagesLoad;
