import { takeEvery } from 'redux-saga/effects';
import { IMAGES_LOAD } from '../types';

// watcher saga -> actions -> worker saga

// worker saga
function* handleImagesLoad() {
    // console.log('Hey from worker!');
    // yield put({ type: 'ACTION_FROM_WORKER' });

    console.log('fetching images from unsplash');
}

// watcher saga
function* rootSaga() {
    // All 'yield take' actions are executed line by line
    // Calls action only one time even if dispatched multiple times (Pulls action only once)
    // yield take('HELLO');
    // yield call(workerSaga);
    // Takes every dispatched action with type: HELLO
    // yield takeEvery('HELLO', workerSaga);

    yield takeEvery(IMAGES_LOAD, handleImagesLoad);
}

export default rootSaga;
