import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class Start extends Component {
  
  onSignInClick() {
    browserHistory.push('login')
  }

  render() {
    return (
      <div>
          <h1>IFFY</h1>
          <p>An app to get your fitness on track</p>
          
          
          
          <p>Already have an account?</p>
          <p><Button bsStyle="success" onClick={this.onSignInClick}>Sign In</Button></p>

      </div>
    );
  }
}

export default Start;