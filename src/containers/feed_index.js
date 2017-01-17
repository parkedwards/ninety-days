import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// you can import Action Creators here ----

// THINK ABOUT:
// First tab could be a checklist of things you need to input for that day
// weight, meal 1, meal 2, workout (if it's a lift day)
// Next tabs could be your logs and tracking


class FeedIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <Nav bsStyle="tabs">
          <LinkContainer to="/feed/checklist"><NavItem>Checklist</NavItem></LinkContainer>
          <LinkContainer to="/feed/weight"><NavItem>Weight Log</NavItem></LinkContainer>
          <LinkContainer to="/feed/meal"><NavItem>Meal Log</NavItem></LinkContainer>
          <LinkContainer to="/feed/macro"><NavItem>Macro Log</NavItem></LinkContainer>
        </Nav>
        
        { this.props.children }

      </div>
    );
  }

}

export default FeedIndex;