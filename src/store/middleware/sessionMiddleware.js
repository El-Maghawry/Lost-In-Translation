import {ACTION_SESSION_SET} from '../actions/sessionActions'

export const sessionMiddleware = ({dispatch}) => next => action => {
    next(action);

    if(action.type === ACTION_SESSION_SET){
        localStorage.setItem('user', JSON.stringify(action.payload))
    }
}