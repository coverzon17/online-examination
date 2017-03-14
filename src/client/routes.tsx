import { React } from 'chen-react';
import { Route } from 'react-router';

import { App } from './app';
import { Home } from './components/home';
export default (
  <Route component={App} >
    <Route path='/home' component={Home} />
  </Route>
);
