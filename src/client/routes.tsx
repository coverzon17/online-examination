import { React } from 'chen-react';
import { Route } from 'react-router';

import { App } from './app';
import { Home } from './components/home';
import { Login } from './components/login';
export default (
  <Route component={App} >
    <Route path='/' component={Home} />
    <Route path="/login" component={Login} />
  </Route>
);
