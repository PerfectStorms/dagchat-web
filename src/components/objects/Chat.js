import React from 'react';
import {NavLink} from "react-router-dom";

export default (props) => (
  <div className={'chat'}>
    <div className={'box'}>
      <NavLink to={'/chats/' + props.name}>
        <span className={'chat-id'}>{props.id}</span> &nbsp;
        {props.name} &nbsp;
        <span className={props.secret ? 'secret' : 'no_secret'}>
          {props.secret ? 'secret' : 'no secret'}</span></NavLink>
    </div>
  </div>
)