import {ACTION_SESSION_SET, ACTION_SESSION_DELETE} from '../actions/sessionActions'

export const sessionReducer = (state = {}, action) => {

    switch(action.type) {
        case ACTION_SESSION_SET:
            return{
                ...action.payload,
                loggedIn: true
            }
            case ACTION_SESSION_DELETE:
                return{
                    ...action.payload,
                    loggedIn: false
                }
            default:
                return state
    }
}