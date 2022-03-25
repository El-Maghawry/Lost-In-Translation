import {ACTION_SESSION_SET, ACTION_SESSION_INIT, sessionSetAction} from '../actions/sessionActions'

export const sessionMiddleware = ({dispatch}) => next => action => {
    
    next(action)

    if(action.type === ACTION_SESSION_INIT){
        const storedSession = localStorage.getItem('user-session');

        if(!storedSession){
            return
        }
        const session = JSON.parse(storedSession)
        dispatch(sessionSetAction(session))
    }

    if(action.type === ACTION_SESSION_SET){
        localStorage.setItem('user-session', JSON.stringify(action.payload))
    }
}