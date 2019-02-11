import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const initialState = {};

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(sagaMiddleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

// Run saga middleware
sagaMiddleWare.run(rootSaga);

export default store;
