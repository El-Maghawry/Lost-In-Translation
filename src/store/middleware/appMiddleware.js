import {loginMiddleware} from './loginMiddleware'
import {sessionMiddleware} from './sessionMiddleware'
import {userMiddleware} from './userMiddleware'
import {applyMiddleware} from 'redux';

export default applyMiddleware(
    loginMiddleware,
    userMiddleware,
    sessionMiddleware
)