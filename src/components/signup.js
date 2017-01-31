import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { createUser } from '../actions/index';

// Username
// Password
// First Name
// Last Name
// Email

class SignUp extends Component {
  onSubmitClick(e) {
    e.preventDefault();

    const fieldResults = e.target.elements;

    const username = fieldResults[0].value;
    const password = fieldResults[1].value;
    const first_name = fieldResults[2].value;
    const last_name = fieldResults[3].value;
    const email = fieldResults[4].value;

    // console.log(this.props);    
    console.log(this.props.createUser({
      username,
      password,
      first_name,
      last_name,
      email,
    }));
      // .then(() => { console.log('heyo!'); })
      // .catch(() => { console.log('no way!'); })
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.onSubmitClick.bind(this)}>
          <input type="text" className="signup-forms" placeholder="Username"></input>
          <input type="password" className="signup-forms" placeholder="Password"></input>
          <input type="text" className="signup-forms" placeholder="First Name"></input>
          <input type="text" className="signup-forms" placeholder="Last Name"></input>
          <input type="text" className="signup-forms" placeholder="Email"></input>
          <button className="signup-forms signup-submit" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

// export default SignUp;
export default connect(null, { createUser })(SignUp);