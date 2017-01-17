import React, { Component } from 'react';

import { DropdownButton, MenuItem, Fade } from 'react-bootstrap';
import moment from 'moment';

// things you need to input on a daily basis:

// Weight (1x per day)
// Meal #1
// Meal #2
// Snacks (unlimited)

class FeedChecklist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Hello, Edward!</h2>
        <p>The date is <span>{moment().format("MMM Do, YYYY")}</span></p>

        <DropdownButton bsStyle={"info"} title={"Let's Go!"} id={`dropdown-basic`}>
          <MenuItem onClick={() => this.setState({ weight: !this.state.weight })}>Weight</MenuItem>
          <MenuItem onClick={() => this.setState({ meal: !this.state.meal })}>Meal</MenuItem>
        </DropdownButton>

        <Fade in={this.state.weight}>
          <div>Weight input!</div>
        </Fade>  

        <Fade in={this.state.meal}>
          <div>Meal input!</div>
        </Fade>  

      </div>
    );
  }
}

export default FeedChecklist;