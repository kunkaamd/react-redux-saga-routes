import { INCREMENT, DECREMENT ,FETCH_MOVIES, FETCH_MOVIE_SUCCEEDED, FETCH_MOVIE_FAILED } from './actionTypes';

//Action: "increase counter "
export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}
//Action: "decrease counter "
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}

export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort
    }
}

export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_MOVIE_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_MOVIE_FAILED,
        error
    }
}