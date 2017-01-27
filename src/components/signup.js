import React, {Component} from 'react';

// Username
// Password
// First Name
// Last Name
// Email

class SignUp extends Component {
  render() {
    return (
      <div className="signup-form-container">
        <form action="">
          <input type="text" className="signup-forms" placeholder="Username"></input>
          <input type="password" className="signup-forms" placeholder="Password"></input>
          <input type="text" className="signup-forms" placeholder="First Name"></input>
          <input type="text" className="signup-forms" placeholder="Last Name"></input>
          <input type="text" className="signup-forms" placeholder="Email"></input>
          <button className="signup-forms signup-submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;