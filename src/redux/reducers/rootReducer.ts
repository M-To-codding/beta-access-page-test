import { combineReducers } from "redux";
import {routerReducer} from "react-router-redux";
import {authReducer} from "./authReducer";
import {usersReducer} from "./usersReducer";
import {productsReducer} from "./productsReducer";

const  rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  users: usersReducer,
  products: productsReducer
});


export default rootReducer;