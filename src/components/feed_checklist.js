import React from 'react';

import moment from 'moment';

const FeedChecklist = () => {
  return (
    <div>
      <h2>Hello, Edward!</h2>
      <p>The date is <span>{moment().format("MMM Do YYYY")}</span></p>
    </div>
  );
};

export default FeedChecklist;