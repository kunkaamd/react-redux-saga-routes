import { INCREMENT, DECREMENT} from '../actions/actionTypes';
//Saga effects
import { takeEvery } from 'redux-saga/effects';

function* increment() {
    console.log(`This is increment saga`);
}

export function* watchIncrement() {         
    yield takeEvery(INCREMENT, increment);
}

function* decrement() {
    console.log(`This is decrement saga`);
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement);
}