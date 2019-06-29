import React, {Component} from 'react';
import axios from "axios";


class CreateDialog extends Component {

  getChat = (e) => {
    e.preventDefault();
    let chat = e.target.elements.chat.value;
    let secret = e.target.elements.secret.checked;

    //console.log(user + " " + pass + " " + pass2);

    axios.get(`http://127.0.0.1:8080/chats/${chat}`).then((res) => {
      //console.log(res.data);

      if (chat !== '') {
        if (res.data.name !== chat) {

          axios.post('http://127.0.0.1:8080/chats', {
            name: chat,
            secret: secret
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          console.log("Registered!");

        } else {
          console.log("Chat is already extends.");
          this.getError();
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
          <div className={"create-dialog"}>

            <form onSubmit={this.getChat} className={"open-block"}>
              <div id={"status"}/>

              <div>
                <input id={"finder"} className="input" name={'chat'} type={"text"} placeholder={"Dialog title"}/>
              </div>

              <div className={"checkbox-block"}>
                <input id="isPrivate" className={"checkbox"} name={'secret'} type="checkbox"/>
                <label htmlFor="isPrivate">Make private this chat</label><br/>
              </div>
              <button className="button">Create</button>
            </form>

          </div>
        </div>
      </div>
    );
  }

  getError() {
    let status = document.getElementById('status').innerHTML;

    if (status === '') {
      document.getElementById('status').innerHTML = 'Chat name is already extends.';
      document.getElementById('finder').classList.add('input-error');
    } else {
      document.getElementById('status').innerHTML = '';
      document.getElementById('finder').classList.remove('input-error')
    }

    document.getElementById('finder').addEventListener('click', function () {
      document.getElementById('status').innerHTML = '';
      document.getElementById('finder').classList.remove('input-error')
    });
  }
}

export default CreateDialog;