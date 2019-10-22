/* eslint-disable */
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import { rootReducer } from './rootReducer';

// createReducer

//const store = createStore(rootReducer, applyMiddleware(logger));
//const store = createStore(rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))


export { store };
