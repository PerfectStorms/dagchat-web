import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";

class Login extends Component {

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    const pass = e.target.elements.password.value;
    console.log(user + " " + pass);

    axios.get(`http://127.0.0.1:8080/users/${user}`).then((res) => {
        // console.log(res.data);

        if (res.data.username === user && pass === res.data.password) {
          console.log("Log in success!");
        } else {
          console.log("Log in failed!");
        }
      });
  };

  render() {
    return (
      <div className={"content"}>
        <div className={"indent"}>

          <form onSubmit={this.getUser} className={"open-block"}>
            <div id={"status"}>
            </div>
            <input id={"username"} className={"input"} type={"text"} name="username" placeholder={"Login"}/>
            <input id={"password"} className={"input"} type={"password"} name="password" placeholder={"Password"}/>
            <button id="login" className={"button"}>Sign in</button>
          </form>
          <form className={"create-block"}>
            <span>&mdash;&mdash;&mdash; OR &mdash;&mdash;&mdash;</span>
            <NavLink id={"create"} className={"button"} to="/register">Create account</NavLink>
          </form>

        </div>
      </div>
    );
  }
}

export default Login;