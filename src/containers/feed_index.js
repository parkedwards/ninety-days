import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import moment from 'moment';

// you can import Action Creators here ----

// THINK ABOUT:
// First tab could be a checklist of things you need to input for that day
// weight, meal 1, meal 2, workout (if it's a lift day)
// Next tabs could be your logs and tracking


class FeedIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    }
  }

  tabSelect(eventKey) {
    event.preventDefault();
    this.setState({
      activeTab: eventKey
    });

  }

  render() {
    return (
      <div>

        <Nav bsStyle="tabs" activeKey={this.state.activeTab} onSelect={this.tabSelect.bind(this)}>
          <LinkContainer to="/feed/checklist"><NavItem eventKey="1" title="Checklist">Checklist</NavItem></LinkContainer>
          <LinkContainer to="/feed/weightlog"><NavItem eventKey="2" title="Weight Log">Weight Log</NavItem></LinkContainer>
          <LinkContainer to="/feed/meallog"><NavItem eventKey="3" title="Meal Log">Meal Log</NavItem></LinkContainer>
          <LinkContainer to="/feed/macrolog"><NavItem eventKey="4" title="Macro Log">Macro Log</NavItem></LinkContainer>
        </Nav>
        
        { this.props.children }

      </div>
    );
  }
}

export default FeedIndex;