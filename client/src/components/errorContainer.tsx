import React from "react";

interface ErrorContainerProps {
  message: string
}

function ErrorContainer(props: ErrorContainerProps) {
  return <article className="container d-flex justify-content-center align-items-center -padding-top80">
    <div className="alert alert-danger col-12 text-center" role="alert">
      {props.message}
    </div>
  </article>
}

export default ErrorContainer;