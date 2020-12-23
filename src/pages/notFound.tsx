import React from "react";
import {Link} from "react-router-dom";

function NotFound() {

  return <article className="not-found -padding-top80">
    <div className="container d-flex flex-column justify-content-between">
      <h3 className="title">Not found</h3>
      <button type="button" className="btn btn-warning col-xl-3 col-sm-4 main-btn align-self-center">Home</button>
    </div>
  </article>
}

export default NotFound;