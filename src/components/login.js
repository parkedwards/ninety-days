import React from 'react';
import { Form, Col, Row, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

const Login = () => {
  return (
    <div>
      <Form horizontal>

        <FormGroup controlId="formHorizontalLogin">
          <Col componentClass={ControlLabel} sm={2}>Login</Col>
          <Col sm={10}><FormControl type="login" placeholder="Login" /></Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>Password</Col>
          <Col sm={10}><FormControl type="password" placeholder="Password" /></Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}><Checkbox>Remember me</Checkbox></Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}><Button type="submit" onClick={onClick}>Sign in</Button></Col>
        </FormGroup>

      </Form>
    </div>
  );
};


// need to actually validate login at some point
// currently just pushes to feed page
const onClick = (event) => {
  event.preventDefault();
  browserHistory.push('feed')
}

export default Login;