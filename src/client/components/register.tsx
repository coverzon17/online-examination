import { React, Component, Form, bind } from 'chen-react';
import { DisplayError } from '../pipes';
import { Auth } from '../services/auth';
import { IRouter } from 'react-router';
import { FormEvent } from 'react';
import { User } from '../services/user';

export interface RegisterProps {
  router: IRouter;
}

export interface RegisterState {
  error?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

export class Register extends Component<RegisterProps, RegisterState> {
  

  componentWillMount() {
  	Auth.getCurrentUser((res, err) => {
  	  if(res) this.props.router.replace('/');
  	})
  }

  @bind()
  register(e: FormEvent) {
  	e.preventDefault();

  	User.register(this.state, (res, err) => {
  	  if(err) {
  	  	this.setState({error: err});
  	  }
  	  if(res && res.success) {
  	  	this.setState({error: {message: "successful registration."}});
  	  	this.props.router.replace('/')
  	  }
  	});
  }
  public render() {
  	return (
  	  <div>
  	    
  	  	<form onSubmit={this.register}>
  	  	  
           <div className="col-xs-12 form-group">
            <h3 className="text-primary text-center">Registration</h3>
            <DisplayError error={this.state.error} />
             <div className="form-group">
               <label>Firstname:</label>
               <Form.Input type="text" className="form-control" placeholder="First Name" valueLink={this.linkState('firstName')}/>
             </div>
             <div>
               <label>Lastname:</label>
               <Form.Input type="text" className="form-control" placeholder="Last Name" valueLink={this.linkState('lastName')}/>
             </div>
             <div className="form-group">
               <label>Email:</label>
               <Form.Input type="email" className="form-control" placeholder="Email" valueLink={this.linkState('email')}/>
             </div>
             <div>
               <label>Password:</label>
               <Form.Input type="password" className="form-control" placeholder="Password" valueLink={this.linkState('password')}/>
             </div>
             <div>
               <label>Confirm Password:</label>
               <Form.Input type="password" className="form-control" placeholder="Repeat Password" valueLink={this.linkState('confirm_password')}/>
             </div>
           </div>
           <div className="col-xs-12 form-group">
             <button type="submit" className="btn btn-primary">Submit</button>
           </div>
  	  	</form>
  	  </div>
    );
  }
}