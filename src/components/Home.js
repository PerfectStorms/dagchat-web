import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import url from "./../url";

class Home extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      url: ''
    };
  }

  getChat = () => {
    const chat = document.getElementById('finder').value;
    //console.log(user + " " + pass);

    axios.get(url.url + `/chats/${chat}`).then((res) => {
      console.log(res.data);

      if (res.data.name === chat) {

        this.setState({
          url: '/chats/' + res.data.name
        });
        console.log("Chat was found!");
        this.doFound();

      } else {

        this.setState({
          url: ''
        });
        console.log("Chat not found!");
        this.doNotFound();

      }
    });
  };

  render() {
    return (
      <div className={"content"}>
        <div className={"indent"}>
          <form onChange={this.getChat} className={"open-block"}>
            <div id={"status"}/>
            <input id={"finder"} className={"input"} name="chat" type={"text"} placeholder={"Secret code or chat name"}/>
            <NavLink to={this.state.url} className={"button"}>Find chat</NavLink>
          </form>

          <div className={"create-block"}>
            <span>&mdash;&mdash;&mdash; OR &mdash;&mdash;&mdash;</span>
            <NavLink id={"create"} className={"button"} to="/create">Create secret chat</NavLink>
          </div>
        </div>
      </div>
    );
  }

  doNotFound() {
    let status = document.getElementById('status').innerHTML;
    if (status === '') {
      document.getElementById('status').innerHTML = 'The secret chat does not found.';
      document.getElementById('finder').classList.add('input-error');
    }
  }

  doFound() {
    let status = document.getElementById('status').innerHTML;
    if (status !== '') {
      document.getElementById('status').innerHTML = '';
      document.getElementById('finder').classList.remove('input-error')
    }
  }
}

export default Home;