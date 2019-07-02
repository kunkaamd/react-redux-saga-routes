import { FETCH_MOVIE_SUCCEEDED, FETCH_MOVIE_FAILED } from '../actions/actionTypes';

const movieReducers = (state = [], action) => {
    switch (action.type) {
        case FETCH_MOVIE_SUCCEEDED:
			console.log('reducer movie success',action.receivedMovies);
            return action.receivedMovies;
        case FETCH_MOVIE_FAILED:
			console.log(action.error);
			console.log('reducer movie fail');
            return [];
        default:
            return state; //state does not change
    }
}

export default movieReducers;