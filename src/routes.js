import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import your react components here
import App from './components/App';
import Start from './containers/start';
import Login from './components/login';
import FeedIndex from './containers/feed_index';
import FeedChecklist from './components/feed_checklist';
import FeedWeight from './components/feed_weight';
import FeedMeal from './components/feed_meal';
import FeedMacro from './components/feed_macro';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Start} />
    <Route path="login" component={Login} />
    <Route path="feed" component={FeedIndex}>
      <Route path="checklist" component={FeedChecklist} />
      <Route path="weight" component={FeedWeight} />
      <Route path="meal" component={FeedMeal} />
      <Route path="macro" component={FeedMacro} />
    </Route>  
  </Route> 
);