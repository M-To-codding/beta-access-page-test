import {
  CHECK_AUTH_CODE_FAILURE, CHECK_AUTH_CODE_REQUEST, CHECK_AUTH_CODE_SUCCESS,
  FETCH_AUTH_CODE_FAILURE,
  FETCH_AUTH_CODE_REQUEST,
  FETCH_AUTH_CODE_SUCCESS, LOG_OUT
} from "../constants/authConstants";

const initialState: AuthState = {
  loading: true,
  codesList: [],
  isAuthorized: false,
  error: null
};

export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case FETCH_AUTH_CODE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_AUTH_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        codesList: action.payload?.codesList,
        error: null
      };
    case FETCH_AUTH_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        codesList: [],
        error: action.payload?.error
      };
    case CHECK_AUTH_CODE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHECK_AUTH_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthorized: action.payload?.isAuthorized,
        error: null
      };
    case CHECK_AUTH_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthorized: action.payload?.isAuthorized,
        error:  action.payload?.error
      };
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        isAuthorized: action.payload?.isAuthorized,
        error:  action.payload?.error
      };
    default:
      return state
  }
};
