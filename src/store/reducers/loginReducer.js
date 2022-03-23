import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_SUCCESS, ACTION_LOGIN_ERROR } from "../actions/loginActions"

const initialState = {
    loginAttempting: false,
    loginError: ''
}

export const loginReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTION_LOGIN_ATTEMPTING:
            return{
                ...state,
                loginAttempting: true,
                loginError: ''
            }
        case ACTION_LOGIN_SUCCESS:
            return {
                ...initialState
            }
        case ACTION_LOGIN_ERROR:
            return{
                ...state,
                loginAttempting: false,
                loginError: action.payload
            }
        default:
                return state
    }
}