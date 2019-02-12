import { take, fork } from 'redux-saga/effects';
import { IMAGES_LOAD_SUCCESS } from '../types';

function* handleStatsRequest(id) {
    console.log('fetching stats', id);
}

function* watchStatsSaga() {
    while (true) {
        const { payload } = yield take(IMAGES_LOAD_SUCCESS);

        for (let i = 0; i < payload.length; i++) {
            yield fork(handleStatsRequest, payload[i].id);
        }
    }
}

export default watchStatsSaga;
