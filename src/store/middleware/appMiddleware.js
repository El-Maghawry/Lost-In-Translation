import {loginMiddleware} from './loginMiddleware'
import {sessionMiddleware} from './sessionMiddleware'
import {applyMiddleware} from 'redux';

export default applyMiddleware(
    loginMiddleware,
    sessionMiddleware
)