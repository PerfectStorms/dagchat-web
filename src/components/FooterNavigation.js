import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class FooterNavigation extends Component {

  render() {
    return (
      <div className="navigation">
        <div className="link">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="link">
          <NavLink to="/rules">Rules</NavLink>
        </div>
        <div className="link">
          <NavLink to="/dev">Developers</NavLink>
        </div>
      </div>
    );
  }
}

export default FooterNavigation;