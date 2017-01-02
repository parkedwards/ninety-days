import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class Start extends Component {
  
  onClick() {
    browserHistory.push('login')
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to 90-D!</h1>
          <p>An app to get your fitness on track</p>
          <p><Button bsStyle="success" onClick={this.onClick}>Get Started</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default Start;