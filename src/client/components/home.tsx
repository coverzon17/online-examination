import { Component, React, bind } from 'chen-react';
import { IRouter } from 'react-router';
import { MouseEvent } from 'react';

import { Logout, Login } from './login';
import { Register } from './register';

export function HomeNavbar(props) {
  return (
    <div className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">

	      <a href="#" className="navbar-brand">Online Examination</a>
	    </div>

	    <ul className="nav navbar-nav">
	      <li><a href="/about">about</a></li>
        <li><a href="/settings">settings</a></li>
	    </ul>

	    <ul className="nav navbar-nav navbar-right">
	      <li><Logout router={props.router} title={props.logoutTitle} /></li>
	    </ul>
      </div>
    </div>
  );
}

export interface HomeProps {
  router: IRouter;
}

export interface HomeState {
  signIn?: boolean;
}

export class Home extends Component<HomeProps, HomeState> {
  constructor(props, context) {
  	super(props, context);
  	this.state = {signIn: true};
  }


  public render() {
    return (<div>
      <HomeNavbar router={this.props.router} logoutTitle="logout"/>
      <div className="col-xs-12">
        <div className="col-xs-9">
        	
        </div>
        <div className="col-xs-3">
          <p>user information</p>
        </div>
      </div>
    </div>);
  }
}
