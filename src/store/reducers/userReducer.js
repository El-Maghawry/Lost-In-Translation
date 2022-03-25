import {ACTION_USER_SET, ACTION_USER_HISTORY_SET} from '../actions/userActions'

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
            default:
                return state;
        }
    }