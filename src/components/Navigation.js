import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {

  render() {
    return (
      <div className="navigation">
        <div className="link">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="link">
          <NavLink to="/chats">Chats</NavLink>
        </div>
        <div className="link">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="link">
          <NavLink to="/dev">Developers</NavLink>
        </div>
        <div className={"profile"}>
          <NavLink to="/login">Sign in</NavLink>
        </div>
        <div className={"find"}>
        </div>
      </div>
    );
  }
}

export default Navigation;