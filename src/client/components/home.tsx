import { Component, React } from 'chen-react';
import { IRouter } from 'react-router';
import { Logout } from './login';

export interface HomeProps {
  router: IRouter;
}

export interface HomeState {}

export class Home extends Component<HomeProps, HomeState> {
  
  public render() {
    return (<div>
    	<h1>Welcome to Chen React</h1>
    	<Logout router={this.props.router} title='Logout'/>
    </div>);
  }
}
