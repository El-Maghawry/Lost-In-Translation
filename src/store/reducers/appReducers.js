import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import {sessionReducer} from './sessionReducer'
import {userReducer} from './userReducer'

const appReducer = combineReducers({
    login: loginReducer,
    user: userReducer, 
    session: sessionReducer});

export default appReducer;