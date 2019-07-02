import React  from 'react';
import { render } from 'react-dom'

//Redux
import { createStore,applyMiddleware } from 'redux';
import allReducers from './reducers';

//Routes
import RootRouter from './routes/index';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index'; 

//Middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


render(<RootRouter store={store} />, document.getElementById('root'));