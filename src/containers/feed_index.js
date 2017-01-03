import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Nav, NavItem } from 'react-bootstrap';

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
    })
  }

  render() {
    return (
      <div>

        <Nav bsStyle="tabs" activeKey={this.state.activeTab} onSelect={this.tabSelect.bind(this)}>
          <NavItem eventKey="1" title="Item">Checklist</NavItem>
          <NavItem eventKey="2" title="Item">Weight Log</NavItem>
          <NavItem eventKey="3" title="Item">Meal Log</NavItem>
          <NavItem eventKey="4" title="Item">Macro Log</NavItem>
        </Nav>

      </div>
    );
  }
}

export default FeedIndex;