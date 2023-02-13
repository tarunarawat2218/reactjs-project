import React from "react";

export default function Alert(props) {
  return (
    
    props.alert && <div class={`${props.alert.type}  ${props.alert.type} px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong class="font-bold">{props.alert.msg}</strong> : {props.alert.type}
      {/* <span class="block sm:inline">Something seriously bad happened.</span> */}
    </div>
  );
}
