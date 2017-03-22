import { React } from 'chen-react';
import { Route, withRouter } from 'react-router';

import { App } from './app';
import { Home } from './components/home';
import { Login } from './components/login';
import { Register } from './components/register';
import { Auth } from './services/auth';

export default (
  <Route component={App} >
    <Route path='/' component={withRouter(Home)} onEnter={Auth.checkCurrentUser}/>
    <Route path="/login" component={withRouter(Login)} />
    <Route path="/register" component={withRouter(Register)}/>
  </Route>
);
