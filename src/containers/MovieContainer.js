import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';

//Actions
import {fetchMoviesAction} from '../actions';

const mapStateToProps = (state) => {    
    return {
		movies: state.movieReducers,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
		onFetchMovie: (sort) => {
			dispatch(fetchMoviesAction(sort));
		},
    };
}
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;