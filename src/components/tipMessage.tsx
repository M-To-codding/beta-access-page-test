import React from "react";


interface TipMessageProps {
  text: string
}

function TipMessage(props: TipMessageProps) {
  return <div className="tip col-12">{props.text}</div>
}

export default TipMessage;