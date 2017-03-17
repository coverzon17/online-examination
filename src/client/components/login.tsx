import { Component, React, Form } from 'chen-react';

export interface LoginProps {}

export interface LoginState {}

export class Login extends Component<LoginProps, LoginState> {

  public render() {
    return (
      <div className="col-xs-8">
        <form>
          <h3 className="text-primary">Login</h3>
           <div className="form-group">
             <label>Email:</label>
             <Form.Input type="email" className="form-control" placeholder="Email" />
           </div>
           <div>
             <label>Password:</label>
             <Form.Input type="password" className="form-control" placeholder="Password" />
           </div>
           <div className="form-group">
             <button type="submit" className="btn btn-primary">Submit</button>
           </div>
        </form>
      </div>
    );
  }
}
