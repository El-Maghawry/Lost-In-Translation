import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_SUCCESS} from "../actions/loginActions"

export const loginMiddleware = ({ dispatch }) => next => action => {
    next(action);

    if(action.type === ACTION_LOGIN_ATTEMPTING){
        //Make the http request
    }

    if(action.type === ACTION_LOGIN_SUCCESS){
        //Do something
    }
}