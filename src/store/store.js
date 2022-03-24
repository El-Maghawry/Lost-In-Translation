import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers/appReducers'
import  appMiddleware  from '././middleware/appMiddleware'

export default createStore(
    appReducer,
    composeWithDevTools(appMiddleware))