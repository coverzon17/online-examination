import { React, Component } from 'chen-react';
import { IRouter } from 'react-router';

import { Logout } from './login';
import { UserProfile, DisplayCompany } from '../pipes';

import { Auth } from '../services/auth';
import { Company } from '../services/company';
export function HomeNavbar(props) {
  return (
    <div className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">

	      <a href="#" className="navbar-brand">Online Examination</a>
	    </div>

	    <ul className="nav navbar-nav">

	    </ul>

	    <ul className="nav navbar-nav navbar-right">
	      <li><Logout router={props.router} name={props.logoutName} /></li>
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
  user?: any;
  company?: any;
}

export class Home extends Component<HomeProps, HomeState> {

  constructor(props, context) {
  	super(props, context);
  	this.state = {signIn: true, user: null};
  }

  componentDidMount() {
    Auth.getCurrentUser( (res, err) => {
      if (err) return err;
      if (res) {
        this.setState({user: res['user']});

        Company.getUserCompany( (res, err) => {
          console.log(res);
          if(err) return err;
          if(res)
            this.setState({company: res['companies']});
        });
      }
    });
  }

  public render() {
    return (<div className="container">
      <div className="col-xs-12">
        <HomeNavbar router={this.props.router} logoutName="logout"/>
      </div>
      <div className="col-xs-12">
        <div className="col-xs-8" style={{border: '1px solid', padding: '25px 10px', margin: '5px 5px', height: '550px'}}>
        	{this.state.company ? this.state.company.map((company, i) => 
            <DisplayCompany company={company} key={company.id} style={{border: '1px solid', backgroundColor: '#eee', margin: '5px 5px', padding: '10px 0'}} />): null}
        </div>
        <div className="col-xs-3" style={{border: '1px solid', padding: '25px 10px', margin: '5px 5px 5px 20px', height: '550px'}}>
          <h3 className="text-primary"> user information</h3>
          {this.state.user ? <UserProfile user={this.state.user} />: null}
        </div>
      </div>
    </div>);
  }
}