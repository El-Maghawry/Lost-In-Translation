import {ACTION_SESSION_SET, ACTION_SESSION_DELETE} from '../actions/sessionActions'

const initialState = 
    {
    username: "",
    translations: [],
    id: 0,
    loggedIn: false
    }
  

export const sessionReducer = (state = initialState, action) => {

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