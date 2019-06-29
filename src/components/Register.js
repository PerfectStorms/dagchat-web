import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";

class Register extends Component {

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    const pass = e.target.elements.password.value;
    const pass2 = e.target.elements.password2.value;

    //console.log(user + " " + pass + " " + pass2);

    axios.get(`http://127.0.0.1:8080/users/${user}`).then((res) => {
      // console.log(res.data);

      if (user !== '' && pass !== '' && pass2 !== '') {
        if (res.data.username !== user) {
          if (pass !== pass2) {
            console.log("Passwords are not similar!");
          } else {

            axios.post('http://127.0.0.1:8080/users', {
              username: user,
              password: pass
            }).then(function (response) {
              console.log(response);
            }).catch(function (error) {
              console.log(error);
            });

            console.log("Registered!");
          }
        } else {
          console.log("Username already extends.");
        }
      } else {
        console.log('Error: Empty field.')
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
            <input id={"password2"} className={"input"} type={"password"} name="password2" placeholder={"Repeat password"}/>
            <button className={"button"}>Create</button>
          </form>
          <form className={"create-block"}>
            <span>&mdash;&mdash;&mdash; OR &mdash;&mdash;&mdash;</span>
            <NavLink id={"create"} className={"button"} to="/login">Sign in</NavLink>
          </form>

        </div>
      </div>
    );
  }
}

export default Register;