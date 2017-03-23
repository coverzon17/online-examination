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

	      <a href="#" className="navbar-brand">project</a>
	    </div>

	    <ul className="nav navbar-nav">
	      <li><a href="/about">about</a></li>
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

  @bind()
  signUp(e: MouseEvent) {
  	e.preventDefault();
  	this.setState({
  		signIn: !this.state.signIn
  	});
  }

  public render() {
    return (<div>
      <HomeNavbar router={this.props.router} logoutTitle="logout"/>
      <div className="col-xs-12">
        <div className="col-xs-9">
        	
        </div>
        <div className="col-xs-3">
          {this.state.signIn ? <Login router={this.props.router} /> : <Register router={this.props.router}/>};
          <button className="btn btn-link" onClick={this.signUp}>
            click to {this.state.signIn ? 'sign up' : 'sign in'}
          </button>
        </div>
      </div>
    </div>);
  }
}
