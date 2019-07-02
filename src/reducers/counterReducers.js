import { DECREMENT, INCREMENT } from '../actions/actionTypes';

const counterReducers = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.step;
        case DECREMENT:
            return state - action.step;
        default:
            return state; //state does not change
    }
}

export default counterReducers;