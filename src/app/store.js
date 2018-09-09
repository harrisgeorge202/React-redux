import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger"

import math from './reducers/mathRerducer';
import user from './reducers/userReducer';






export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger))