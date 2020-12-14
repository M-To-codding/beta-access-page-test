import React, {ChangeEvent} from "react";
import SubmitButton from "../../components/submitButton";
import TipMessage from "../../components/tipMessage";

interface BetaAccessProps {
  handleAuthorization: any,
  setText: any,
  inputText: string,
  error: string,
  inputError: string,
}

function BetaAccess(props: BetaAccessProps) {
  let errorMessage = props.error;
  let inputErrorMessage = props.inputError;
  let tipText = ' If you have access code, place it to this input and tap a button';

  return <article className="container d-flex justify-content-center flex-wrap">

    <div className="row-cols-1">
      <h1 className="title">You dont have access to this site.</h1>
    </div>

    <form onSubmit={props.handleAuthorization} className="col-10 access-code-form">

      <TipMessage text={tipText}/>

      <div className="input-group col-xl-6 col-sm-12">
        <input type="text" value={props.inputText} onChange={event => props.setText(event.target.value)} name="text"
               placeholder="Code" className=" col-xl-3  col-md-6  col-sm-12"/>
        <div className="input-group-append  col-xl-3  col-md-6  col-sm-12" id="button-addon4">
          <SubmitButton/>
        </div>
      </div>

      {
        <article>
          <p className="error bg-danger text-white">{errorMessage}</p>
          <p className="error bg-danger text-white">{inputErrorMessage}</p>
        </article>
      }
    </form>
  </article>
}

export default BetaAccess;