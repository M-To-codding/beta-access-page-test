import axios, {AxiosResponse} from "axios";
import {
  CHECK_AUTH_CODE_FAILURE,
  CHECK_AUTH_CODE_REQUEST,
  CHECK_AUTH_CODE_SUCCESS,
  FETCH_AUTH_CODE_FAILURE,
  FETCH_AUTH_CODE_REQUEST,
  FETCH_AUTH_CODE_SUCCESS
} from "../constants/authConstants";
import {getAuthorizedUserToken, setAuthorizedUserToken} from "../../utils/cookiesHandlers";
import {CODE_NOT_EXISTS} from "../../utils/errorTexts";


export function checkAuthToken() {
  return async (dispatch: DispatchAuth) => {
    dispatch(authRequest());
    let token = getAuthorizedUserToken();

    if (token !== null && token) {
      dispatch(authSuccess(true));
    } else {
      // let error = {message: 'Token not found'};
      dispatch(authFailed(false));
    }
  }
}

export function compareAuthCodes(codes: Array<string>, currentCode: string) {
  return async (dispatch: DispatchAuth) => {
    dispatch(authRequest());

    let isAuthCodeExists: number = codes.indexOf(currentCode);

    if (isAuthCodeExists >= 0) {
      setAuthorizedUserToken(currentCode);
      dispatch(authSuccess(true));
    } else {
      let error = {message: CODE_NOT_EXISTS};
      dispatch(authFailed(false, error));
    }
  }
}

export function fetchAuthCodes() {
  return async (dispatch: DispatchAuth) => {
    dispatch(fetchAuthCodesRequest());

    await axios.get(
      `https://api.mocki.io/v1/${process.env.REACT_APP_MOCK_API_KEY}`
    ).then((authCodes: AxiosResponse) => {
      if (authCodes != null) {
        dispatch(fetchAuthCodesSuccess(authCodes));
      }
    }).catch((error) => {
      dispatch(fetchAuthCodesFailure(error));
    });

  }
}

function fetchAuthCodesRequest(): AuthAction {
  const action: AuthAction = {
    type: FETCH_AUTH_CODE_REQUEST
  };
  return action;
}

function fetchAuthCodesSuccess(authCodes: any): AuthAction {
  const action: AuthAction = {
    type: FETCH_AUTH_CODE_SUCCESS,
    payload: authCodes.data.codes
  };
  return action;
}

function fetchAuthCodesFailure(error: any): AuthAction {
  const action: AuthAction = {
    type: FETCH_AUTH_CODE_FAILURE,
    payload: error
  };
  return action;
}

function authRequest() {
  const action: AuthAction = {
    type: CHECK_AUTH_CODE_REQUEST,
  };
  return action;
}

function authSuccess(isAuthorized: boolean) {
  const action: AuthAction = {
    type: CHECK_AUTH_CODE_SUCCESS,
    payload: isAuthorized
  };
  return action;
}

function authFailed(isAuthorized: boolean, error?: {} | string) {
  const action: AuthAction = {
    type: CHECK_AUTH_CODE_FAILURE,
    payload: isAuthorized,
    additionalProp: error,
  };
  return action;
}