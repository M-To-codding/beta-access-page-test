import React from "react";


interface TipMessageProps {
  text: string
}

function TipMessage(props: TipMessageProps) {
  return <div className="tip col-xl-5 col-md-6 col-sm-10">{props.text}</div>
}

export default TipMessage;