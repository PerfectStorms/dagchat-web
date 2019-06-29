import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Dialog from './components/Dialog';
import About from './components/About'
import Error from './components/Error';
import Rules from './components/Rules';
import Developers from './components/Developers';
import CreateDialog from './components/CreateDialog';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Chats from './components/Chats';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          {/*<div className={'left-bar'}>*/}
          {/*  <div className={'profile'}>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="header">
            <Navigation/>
          </div>

          <div className="wrapper">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/dialog" component={Dialog} />
              <Route path="/create" component={CreateDialog} />
              <Route path="/chats/:name" component={Dialog} />
              <Route path="/chats" component={Chats} />
              <Route path="/about" component={About} />
              <Route path="/rules" component={Rules} />
              <Route path="/dev" component={Developers} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={Error} />
            </Switch>
          </div>

          {/*<div className="footer">*/}
          {/*  <FooterNavigation/>*/}
          {/*</div>*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;