import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  USERS_LIST_RESET
} from "../constants/usersConstants";
import axios, {AxiosResponse} from "axios";

export function fetchUsers(limit: number = 10) {
  return async (dispatch: DispatchUsers) => {
    dispatch(fetchUsersListRequest());

    await axios.get(
      `https://randomuser.me/api/?results=${limit}`
    ).then((usersData: AxiosResponse) => {
      if (usersData != null) {
        dispatch(fetchUsersListSuccess(usersData));
      }
    }).catch((error) => {
      dispatch(fetchUsersListFailure(error));
    });

  }
}
export function usersListReset() {
  const action: UsersAction = {
    type: USERS_LIST_RESET,
  };
  return action;
}

function fetchUsersListRequest(): UsersAction {
  const action: UsersAction = {
    type: FETCH_USERS_REQUEST
  };
  return action;
}

function fetchUsersListSuccess(usersData: any): UsersAction {
  const action: UsersAction = {
    type: FETCH_USERS_SUCCESS,
    payload: {usersList: usersData.data?.results}
  };
  return action;
}

function fetchUsersListFailure(errorData: any): UsersAction {
  const action: UsersAction = {
    type: FETCH_USERS_FAILURE,
    payload: {error: errorData}
  };
  return action;
}