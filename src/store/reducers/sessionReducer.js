import {ACTION_SESSION_SET} from '../actions/sessionActions'

const initialState = 
    {
    username: "",
    translations: [],
    id: 0,
    loggedIn: false
    }
  

export const sessionReducer = (state = initialState, action) => {

    if(action.type === ACTION_SESSION_SET ) {
        
            return{
                ...action.payload,
                loggedIn: true
            }
        }
        else{
            return state
        }
    }