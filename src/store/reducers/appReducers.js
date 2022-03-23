import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

const appReducer = combineReducers({login: loginReducer});

export default appReducer;