import React, { Component} from 'react';
import { Link } from "react-router-dom";
export default class CounterComponent extends Component {
	componentDidMount() {
	}
    render() {
        return (
            <div>
                <p>
                    Redux Saga tutorials
					<Link to={`/movie/${this.props.times}`}>To Movie</Link>
                </p>
                <div>
                    <button
                        style={{ fontSize: 18}}
                        onClick={() => {
                            this.props.onDecrement(1);
                        }}>
                        Decrement -
                    </button>
                    <button                 
                        style={{ fontSize: 18}}
                        onClick={() => {                            
                            this.props.onIncrement(1)
                        }}>
                        Increment +
                    </button>
                </div>
                <p>
                    Counts: {this.props.times}
                </p>
            </div>);
    }
}