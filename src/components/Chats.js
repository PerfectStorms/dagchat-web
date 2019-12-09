import React, { Component } from 'react';
// import axios from "axios";
import Chat from "./objects/Chat";
import {NavLink} from "react-router-dom";
import url from "./../url";


class Chats extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {chats: []};
    this.getChats();
  }

  getChats = () => {
    // axios.get('http://127.0.0.1:8080/chats').then((res) => {
    //   console.log(res.data);
    // });


    fetch(url.url  + '/chats')
      .then(response => {
        return response.json();
      }).then(result => {
      this.setState({
        chats: result
      });
    });
  };

  render() {
    return (
      <div className={'content'}>
        <div className={'indent'}>
          <div>
            <h1>Chats <NavLink className={'create-chat-button'} to={'/create'}>Create</NavLink></h1>
          </div>
          {this.state.chats.map((chat, index) => {
            return (
                <Chat
                  key={index}
                  id={chat.id}
                  name={chat.name}
                  secret={chat.secret}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Chats;