import React from 'react';
import {Provider} from 'react-redux';
import {browserHistory, Route, Router} from 'react-router';
import {routerMiddleware} from "react-router-redux"
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import reduceReducers from "reduce-reducers";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/sagas/rootSaga";
import rootReducer from "./redux/reducers/rootReducer"
import './index.css';
import App from './App';

const routingMiddleware = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const reducers = reduceReducers(rootReducer);
const store= createStore(reducers, applyMiddleware(sagaMiddleware, routingMiddleware));

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/home" component={App}/>
    </Router>
    </Provider>,
    document.getElementById('root')
);


