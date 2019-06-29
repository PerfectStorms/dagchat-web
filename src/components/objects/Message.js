import React from 'react';

export default (props) => (
  <div className={"message"}>
    <div className={"text me"}>
      <b>{props.user}</b>: {props.text}
      <div className={"info"}>
        {/*<div className={"send-ed"}/>*/}
        <div className={"date"}>{props.time}</div>
      </div>
    </div>
  </div>
)