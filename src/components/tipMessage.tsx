import React, {createRef, useEffect, useRef} from "react";


interface TipMessageProps {
  text: string,
  children?: any
}

function TipMessage(props: TipMessageProps) {
  useEffect(() => {
      window.$('#popover1').popover('show');

      return ()=>{
        window.$('#popover1').popover('disable');
      }
  });

  return <div tabIndex={0} data-trigger="focus" data-toggle="popover" data-placement="bottom" id="popover1" className="col-10 popover-content"
              title={props.text}>
    {props.children}
  </div>
}

export default TipMessage;