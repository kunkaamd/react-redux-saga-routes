import { FETCH_MOVIES, FETCH_MOVIE_FAILED, FETCH_MOVIE_SUCCEEDED } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from '../service/Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({ type: FETCH_MOVIE_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {
        yield put({ type: FETCH_MOVIE_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}