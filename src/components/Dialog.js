import React, { Component } from 'react';
import axios from 'axios';
import Message from "./objects/Message";
import url from "./../url";


class Dialog extends Component {

  chat_name = '';

  constructor(props, context) {
    super(props, context);
    this.state = {
      messages: [],
      name: this.props.match.params.name
    };
    this.getMessages();
  }
f
  getMessages() {
    let chat_name = window.location.pathname.split("/").pop();


    axios.get(url.url + `/messages/${chat_name}`)
      .then(response => {
        this.setState({
          name: this.props.match.params.name
        });
        this.chat_name = this.props.match.params.name;
        return response.data;
      }).then(result => {
      this.setState({
        messages: result
      });
    }).then(() => {
      console.log(this.state.messages);
      console.log(this.state.name);
    });
  }

  addMessage = () => {
    let text = document.getElementById('text').value;
    console.log(text);
    if (text === '') return 0;

    // const date = new Date().getDate(); //Current Date
    // const month = new Date().getMonth() + 1; //Current Month
    // const day = new Date().getDay(); //Current Month
    // const year = new Date().getFullYear(); //Current Year
    // const hours = new Date().getHours(); //Current Hours
    // const min = new Date().getMinutes(); //Current Minutes
    // const sec = new Date().getSeconds(); //Current Seconds

    let time = new Date().getHours() + ":" + new Date().getMinutes();

    axios.post(url.url + '/messages', {
      username: 'anonymous',
      message: text,
      chat: window.location.pathname.split("/").pop(),
      times: time.toString()
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

    // axios.get(`http://127.0.0.1:8080/messages/${this.props.match.params.name}`)
    //   .then(response => {
    //     this.setState({
    //       name: this.props.match.params.name
    //     });
    //     this.chat_name = this.props.match.params.name;
    //     return response.data;
    //   }).then(result => {
    //   this.setState({
    //     messages: result
    //   });
    // }).then(() => {
    //   console.log(this.state.messages);
    //   console.log(this.state.name);
    // });
  };



  // componentDidUpdate(prevProps) {
  //   // Типичный вариант использования (не забудьте сравнить props):
  //   this.getMessages();
  // }


  render() {
    return (
      <div className={"content"}>
        <div className={"indent"}>
          <div className={"dialog"}>

            {/*<div className={"toolbar"}>*/}
            {/*  toolbar*/}
            {/*</div>*/}

            <div id={'messages'} className={"messages"}>
              <div>
                {this.state.messages.map((message) => {
                  return (
                    <Message
                      key={message.id}
                      user={message.username}
                      time={message.times}
                      text={message.message}/>
                  )
                })}
              </div>
            </div>

            <div className={"field"}>
              <textarea id={'text'} className={"text"} name={'text'} placeholder={"Enter your message here..."}>
              </textarea>
              <div className={"audio"}>
                F1
              </div>
              <div className={"smiles"}>
                F2
              </div>
              <button onClick={this.addMessage} className={"send-button"}>Send</button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  messages() {
    return (
      <div>
        {this.state.messages.map((message) => {
          return (
            <Message
              key={message.id}
              user={message.username}
              time={message.times}
              text={message.message}/>
          )
        })}
      </div>
    )
  }

}

export default Dialog;