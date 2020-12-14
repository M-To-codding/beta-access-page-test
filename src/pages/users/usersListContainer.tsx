import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../../redux/actions/usersActionCreators";
import UsersList from "./usersList";
import {push} from "react-router-redux";

interface DashboardProps {
  loading: boolean,
  fetchUsers: any,
  usersList: Array<any>
  error: any
}

function UsersListContainer(props: DashboardProps) {
  const [rangeValue] = useState(10);
  let usersList = props.usersList;

  useEffect(() => {
    props.fetchUsers(rangeValue);
  }, [rangeValue]);


  return <>
    <UsersList usersList={usersList} loading={props.loading} error={props.error}/>
  </>;
}

const mapStateToProps = (state: any) => ({
  loading: state.users.loading,
  usersList: state.users.usersList,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: (limit: number) => dispatch(fetchUsers(limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);