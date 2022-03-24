import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_SUCCESS, loginSuccessAction, loginErrorAction} from "../actions/loginActions"
import{ LoginApi } from '../../components/Login/LoginApi'
import {sessionSetAction} from '../actions/sessionActions'
import {userSetAction} from '../actions/userActions'



export const loginMiddleware = ({ dispatch }) => next => action => {
    next(action);

    if(action.type === ACTION_LOGIN_ATTEMPTING){
        LoginApi.login(action.payload)
        .then(profile => {
            dispatch(loginSuccessAction(profile))
        })
        .catch(error => {
            dispatch(loginErrorAction(error))
        })
    }

    if(action.type === ACTION_LOGIN_SUCCESS){
        dispatch(sessionSetAction(action.payload));
        dispatch(userSetAction(action.payload));
    }
}