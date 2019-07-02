import React, { Component} from 'react';

export default class CounterComponent extends Component {
	componentDidMount() {
		this.props.onFetchMovie(null);
	}
    render() {
        return (
            <div>
                <p>
                    Redux Saga tutorials
                </p>
				<p>Number is {this.props.match.params.number}</p>
				<p>Movie data : {JSON.stringify(this.props.movies)}</p>
            </div>);
    }
}