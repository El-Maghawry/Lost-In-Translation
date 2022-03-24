import {ACTION_SESSION_SET} from '../actions/sessionActions'

const initialState = 
    {
    "id": 0,
      "username": "",
      "translations": []
    }
  

export const sessionReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTION_SESSION_SET:
            return{
                ...action.payload
            }
        default:
            return state
    }
}