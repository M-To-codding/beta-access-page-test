import React, {ChangeEvent, useEffect, useState} from "react";
import {connect} from "react-redux";
import BetaAccess from "./betaAccess";
import {compareAuthCodes, fetchAuthCodes} from "../../redux/actions/authActionCreators";
import {history} from "../../redux/store";
import Loader from "../../components/loader";
import {EMPTY_INPUT} from "../../utils/errorTexts";


interface BetaAccessContainerProps extends AuthState {
  fetchAuthCodes?: any,
  compareAuthCodes?: any,
  error: string
}

function BetaAccessContainer(props: BetaAccessContainerProps) {
  const [text, setText] = useState('');
  const [error, setError] = useState(props.error);

  useEffect(() => {

    if (!props.isAuthorized && props.codesList?.length === 0) {
      props.fetchAuthCodes();
    }
  }, [props.codesList]);


  function handleAuthorization(event: ChangeEvent) {
    event.preventDefault();
    checkUserAuthorization(text);
  }

  function checkUserAuthorization(code: string) {
    if (code.length === 0) {
      setError(EMPTY_INPUT);

    } else {
      let token = code;
      if (props.codesList?.length > 0) {
        props.compareAuthCodes(props.codesList, token);
        setError('');
      }
    }
  }

  if (props.isAuthorized) {
    history.push('/');
    return <div> </div>
  }

  if (props.loading) {
    return <Loader/>
  }

  return <BetaAccess handleAuthorization={handleAuthorization} setText={setText} inputText={text} error={props.error}
                     inputError={error}/>
}


const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
  codesList: state.auth.codesList,
  isAuthorized: state.auth.isAuthorized,
  error: state.auth.error?.message
});

const mapDispatchToProps = (dispatch: any) => ({
  compareAuthCodes: (authCodes: Array<string>, code: string) => dispatch(compareAuthCodes(authCodes, code)),
  fetchAuthCodes: () => dispatch(fetchAuthCodes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetaAccessContainer);
