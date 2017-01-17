import React from 'react';

import moment from 'moment';

// things you need to input on a daily basis:

// Weight (1x per day)
// Meal #1
// Meal #2
// Snacks (unlimited)


const FeedChecklist = () => {
  return (
    <div>
      <h2>Hello, Edward!</h2>
      <p>The date is <span>{moment().format("MMM Do, YYYY")}</span></p>
    </div>
  );
};

export default FeedChecklist;