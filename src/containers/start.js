import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import SignUp from '../components/signup';

class Start extends Component {
  
  onLogInClick() {
    browserHistory.push('login')
  }

  render() {
    return (
      <div>
          <h1>IFFY</h1>
          <p>An app to get your fitness on track</p>
          
          <SignUp />
          
          <p>Already have an account?</p>
          <p><Button bsStyle="success" onClick={this.onLogInClick}>Log In</Button></p>

      </div>
    );
  }
}

export default Start;