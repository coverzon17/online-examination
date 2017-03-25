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
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  company_name?: string;
  company_email?: string;
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
  	  	this.setState({error: err, password: "", confirm_password: ""});
  	  }
  	  if(res && res.success) {
  	  	this.setState({error: {message: "successful registration."}});
  	  	this.props.router.replace('/')
  	  }
  	});
  }
  public render() {
  	return (
  	  <div className="col-xs-offset-3 col-xs-6 col-xs-12"> 
  	  	<form onSubmit={this.register}>
  	  	  
           <div className="col-xs-12 form-group">
            <h3 className="text-primary text-center">Registration</h3>
            <DisplayError error={this.state.error} />
             <div className="form-group">
               <label>Firstname:</label>
               <Form.Input type="text" className="form-control" placeholder="First Name" valueLink={this.linkState('firstname')}/>
             </div>
             <div className="form-group">
               <label>Lastname:</label>
               <Form.Input type="text" className="form-control" placeholder="Last Name" valueLink={this.linkState('lastname')}/>
             </div>
             <div className="form-group">
               <label>Email:</label>
               <Form.Input type="email" className="form-control" placeholder="Email" valueLink={this.linkState('email')}/>
             </div>
             <div className="form-group">
               <label>Password:</label>
               <Form.Input type="password" className="form-control" placeholder="Password" valueLink={this.linkState('password')}/>
             </div>
             <div className="form-group">
               <label>Confirm Password:</label>
               <Form.Input type="password" className="form-control" placeholder="Repeat Password" valueLink={this.linkState('confirm_password')}/>
             </div>
             <h3 className="text-center text-primary">Company</h3>
             <div className="form-group">
                <label>Name:</label>
                <Form.Input type="text" className="form-control" placeholder="Company Name" valueLink={this.linkState('company_name')}/>
             </div>
             <div className="form-group">
               <label>Email:</label>
               <Form.Input type="text" className="form-control" placeholder="Company Email" valueLink={this.linkState('company_email')}/>
             </div>
           </div>
           <div className="col-xs-12 form-group">
             <button type="submit" className="btn btn-primary btn-block">Register</button>

             <div className="pull-right form-group">
              <a href="/login">click here to login</a>
             </div>
           </div>

  	  	</form>
  	  </div>
    );
  }
}