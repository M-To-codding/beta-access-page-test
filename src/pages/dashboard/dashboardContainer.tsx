import React from "react";
import Dashboard from "./dashboard";
import {connect} from "react-redux";
import Loader from "../../components/loader";
import {history} from "../../redux/store";

interface DashboardProps {
  loading: boolean,
  isAuthorized: boolean
}

function DashboardContainer(props: DashboardProps) {
  if (props.loading) {
    return <Loader/>
  }

  if (!props.isAuthorized) {
    history.replace('/access-denied');
  }

  return <Dashboard/>
}

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
  isAuthorized: state.auth.isAuthorized
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);