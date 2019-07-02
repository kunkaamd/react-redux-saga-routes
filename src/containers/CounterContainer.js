import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';

//Actions
import { increaseAction , decreaseAction } from '../actions';

const mapStateToProps = (state) => {    
    return {        
        times: state.counterReducers,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step) => {                        
            dispatch(decreaseAction(step));
        },
        onIncrement: (step) => {                        
            dispatch(increaseAction(step));
        }
    };
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;