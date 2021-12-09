import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../../redux/actions/usersActionCreators";
import UsersList from "./usersList";
import {USER_NOT_AUTHORIZED} from "../../utils/errorTexts";
import {authorizationFailure} from "../../redux/actions/authActionCreators";

interface DashboardProps {
  loading: boolean,
  isAuthorized: boolean,
  fetchUsers: any,
  usersList: Array<any>,
  error: any,
  authorizationFailure: any
}

function UsersListContainer(props: DashboardProps) {
  let usersList = props.usersList;

  useEffect(() => {
    if (props.isAuthorized) {
      props.fetchUsers(10);
    } else {
      props.authorizationFailure({error: USER_NOT_AUTHORIZED, redirectTo: '/access-denied'});
    }
  }, []);

  return <>
    <UsersList usersList={usersList} loading={props.loading} error={props.error}/>
  </>;
}

const mapStateToProps = (state: any) => ({
  isAuthorized: state.auth.isAuthorized,
  loading: state.users.loading,
  usersList: state.users.usersList,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: (limit: number) => dispatch(fetchUsers(limit)),
  authorizationFailure: (data: any) => dispatch(authorizationFailure(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);