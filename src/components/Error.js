import React, { Component } from 'react';

class Error extends Component {

  render() {
    return (
      <div className={"content"}>
        <div className={"indent"}>
          <h1>Error 404.</h1>
          This page does not found!
        </div>
      </div>
    );
  }
}

export default Error;