import { take, fork, call, put } from 'redux-saga/effects';
import { IMAGES_LOAD_SUCCESS } from '../types';
import { fetchImageStats } from '../api';
import {
    loadImageStats,
    setImageStats,
    setImageStatsError,
} from '../actions/statsActions';

function* handleStatsRequest(id) {
    try {
        yield put(loadImageStats(id));
        const imageStats = yield call(fetchImageStats, id);
        yield put(setImageStats(id, imageStats.downloads.total));
    } catch (error) {
        yield put(setImageStatsError(id));
    }
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
