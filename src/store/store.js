import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers/appReducers'
import  applyMiddleware  from './middleware/applyMiddleware';

export default createStore(
    appReducer,
    composeWithDevTools(applyMiddleware))