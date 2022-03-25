import {ACTION_USER_SET, ACTION_USER_HISTORY_SET, ACTION_USER_HISTORY_CLEAR} from '../actions/userActions'

const initialState = 
    {
    "id": 0,
      "username": "",
      "translations": []
    }

    export const userReducer = (state = initialState, action) => {

        switch (action.type) {
            case ACTION_USER_SET:
                return {
                    ...action.payload,
                }
            case ACTION_USER_HISTORY_SET:
                return{
                    ...state,
                    translations: [...state.translations, action.payload]
                }
            case ACTION_USER_HISTORY_CLEAR:
                return{
                    ...state,
                    translations: []
                }
            default:
                return state;
        }
    }