import { all,fork } from 'redux-saga/effects';

import { watchIncrement, watchDecrement } from './counterSagas';
import {watchFetchMovies} from './movieSagas';
export default function* rootSaga() {
    yield all([
        watchIncrement(), 
        watchDecrement(), 
		fork(watchFetchMovies),
    ]);
}