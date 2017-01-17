import React, { Component } from 'react';

import { DropdownButton, MenuItem } from 'react-bootstrap';
import moment from 'moment';

// things you need to input on a daily basis:

// Weight (1x per day)
// Meal #1
// Meal #2
// Snacks (unlimited)

class FeedChecklist extends Component {
  render() {
    return (
    <div>
      <h2>Hello, Edward!</h2>
      <p>The date is <span>{moment().format("MMM Do, YYYY")}</span></p>

      <DropdownButton bsStyle={"info"} title={"Let's Go!"} id={`dropdown-basic`}>
        <MenuItem onClick={()=>console.log('heyo!')}>Weight</MenuItem>
        <MenuItem onClick={()=>console.log('booga!')}>Meal</MenuItem>
      </DropdownButton>  

    </div>
    );
  }
}

export default FeedChecklist;