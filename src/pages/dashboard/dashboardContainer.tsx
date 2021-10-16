import React from "react";
import Dashboard from "./dashboard";
import {connect} from "react-redux";
import Loader from "../../components/loader";
import {history} from "../../redux/store";
import {authorizationFailure} from "../../redux/actions/authActionCreators";
import {USER_NOT_AUTHORIZED} from "../../utils/errorTexts";
import Home from "../home/home";

interface DashboardProps {
  loading: boolean,
  isAuthorized: boolean,
  authorizationFailure: any
}

function DashboardContainer(props: DashboardProps) {
  if (props.loading) {
    return <Loader/>
  }

  if (props.isAuthorized) {
    return <Dashboard/>
  }

  return <Home/>
}

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
  isAuthorized: state.auth.isAuthorized
});

const mapDispatchToProps = (dispatch: any) => ({
  authorizationFailure: (data: any) => dispatch(authorizationFailure(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);