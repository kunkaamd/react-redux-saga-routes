import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CounterContainer from '../containers/CounterContainer'
import MovieContainer from '../containers/MovieContainer'

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
			<Route path="/" exact component={CounterContainer}/>
            <Route path="/counter" exact component={CounterContainer}/>
            <Route path="/movie/:number?" exact component={MovieContainer}/>
        </Router>
    </Provider>
);

export default Root