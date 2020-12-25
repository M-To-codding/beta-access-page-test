import React from "react";
import {connect} from "react-redux";
import Loader from "../../components/loader";
import {history} from "../../redux/store";
import {authorizationFailure} from "../../redux/actions/authActionCreators";
import {USER_NOT_AUTHORIZED} from "../../utils/errorTexts";
import Store from "./store";

interface StoreProps {
  loading: boolean,
  isAuthorized: boolean,
  authorizationFailure: any
}

function StoreContainer(props: StoreProps) {
  if (props.loading) {
    return <Loader/>
  }


  return <Store/>
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
)(StoreContainer);