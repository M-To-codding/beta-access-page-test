import { combineReducers } from "redux";
import {routerReducer} from "react-router-redux";
import {authReducer} from "./authReducer";
import {usersReducer} from "./usersReducer";

const  rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  users: usersReducer
});


export default rootReducer;