import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import your react components here
import App from './components/app';
import Start from './components/start';
import Login from './components/login';
import FeedIndex from './containers/feed_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Start} />
    <Route path="login" component={Login} />
    <Route path="feed" component={FeedIndex} />
  </Route> 
);