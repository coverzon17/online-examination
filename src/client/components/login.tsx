import { Component, React, Form, bind } from 'chen-react';
import { Link, IRouter } from 'react-router';
import { FormEvent } from 'react';
import { DisplayError } from '../pipes';
import { Auth } from '../services/auth';

export interface LoginProps {
  router: IRouter;
}

export interface LoginState {
  error?: any;
  email?: string;
  password?: string;
}

export class Login extends Component<LoginProps, LoginState> {
  constructor(props, context) {
    super(props, context);
    this.state = {error: null, email: '', password: ''};

  }

  componentWillMount() {
    console.log('hey');
    Auth.getCurrentUser((res, err) => {
      if(res && res.user) {
        this.props.router.replace('/');
      }
    })
  }

  @bind()
  login(e: FormEvent) {
    e.preventDefault();
    Auth.login(this.state.email, this.state.password, (res, err) => {
      if (err) {
        this.setState({error: err});
      } else if (res.success) {
        this.props.router.replace('/');
      }
    });
  }
  public render() {
    return (
      <div className="col-xs-8">
        {this.state.error ? <DisplayError error={this.state.error} /> : null }
        <form onSubmit={this.login}>
          <h3 className="text-primary">Login</h3>
           <div className="form-group">
             <label>Email:</label>
             <Form.Input type="email" className="form-control" placeholder="Email" valueLink={this.linkState('email')}/>
           </div>
           <div>
             <label>Password:</label>
             <Form.Input type="password" className="form-control" placeholder="Password" valueLink={this.linkState('password')}/>
           </div>
           <div className="form-group">
             <button type="submit" className="btn btn-primary">Submit</button>
           </div>
        </form>
      </div>
    );
  }
}

export interface LogoutProps {
  router: IRouter;
  title?: string;
}

export interface LogoutState {}

export class Logout extends Component<LogoutProps, LogoutState> {

  @bind()
  logout(e) {
    e.preventDefault();
    Auth.logout((res, err) => {
      if (res.success) {
        this.props.router.replace('/login');
      }
    });
  }

  public render() {
    return (<Link to="/login" onClick={this.logout} >{this.props.title}</Link>);
  }
}