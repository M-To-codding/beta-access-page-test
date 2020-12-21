import {
  CHECK_AUTH_CODE_FAILURE,
  CHECK_AUTH_CODE_SUCCESS,
  FETCH_AUTH_CODE_FAILURE, LOG_OUT
} from "../redux/constants/authConstants";
import {authorizationFailure, authorizationSuccess} from "../redux/actions/authActionCreators";
import {USER_NOT_AUTHORIZED} from "./errorTexts";

const apiErrorsHandler = (store: any) => (next: any) => (action: any) => {

  if (action.type === CHECK_AUTH_CODE_FAILURE || action.type === FETCH_AUTH_CODE_FAILURE || action.type === LOG_OUT) {
    store.dispatch(authorizationFailure({error: USER_NOT_AUTHORIZED}));
  }
  if (action.type === CHECK_AUTH_CODE_SUCCESS) {
    store.dispatch(authorizationSuccess());
  }

  return next(action);
};

export default apiErrorsHandler;