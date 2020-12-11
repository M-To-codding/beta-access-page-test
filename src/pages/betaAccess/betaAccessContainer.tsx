import React from "react";
import {connect} from "react-redux";
import BetaAccess from "./betaAccess";


interface BetaAccessProps {
  accessCode: string
}

function BetaAccessContainer(props: BetaAccessProps) {
  return  <BetaAccess/>
}


const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetaAccessContainer);