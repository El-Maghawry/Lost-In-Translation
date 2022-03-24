import {ACTION_USER_LOAD, ACTION_USER_SET} from '../actions/userActions'

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
            default:
                return state;
        }
    }