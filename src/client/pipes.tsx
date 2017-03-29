import { React } from 'chen-react';

export interface DisplayErrorProps {
  error?: any;
  style?: React.CSSProperties;
};

export function DisplayError(props: DisplayErrorProps) {
  if (typeof props.error == 'undefined' || !props.error || !props.error.message)
  	return null;

  let message = [];

  if (typeof props.error.message == 'string') {
  	message.push(props.error.message);
  } else {
  	for (let indexNum in props.error.message) {
  	  for (let msg of props.error.message[indexNum]) {
  	  	message.push(<span key={msg}>{msg}<br/></span>);
  	  }
  	}
  }

  return (
  	<div className="alert alert-danger" style={props.style}>
  		{message}
  	</div>
  );
}

export interface UserProfileProps {
  style?: React.CSSProperties;
  user?: any;
}

export function UserProfile(props: UserProfileProps) {
  return (
    <div className="col-xs-12" style={props.style}>
      <div>
        Email: {props.user.email}
      </div>
      <div>
        Name: {props.user.firstName} {props.user.lastName}
      </div>
    </div>
  );
}


export interface DisplayCompanyProps {
  style?: React.CSSProperties;
  company?: any;
}

export function DisplayCompany(props: DisplayCompanyProps) {
  return (
    <div className="col-xs-4 text-center" style={props.style}>
      <div>
        <p>title: <a href='#'> {props.company.name}</a></p>
      </div>
      {
      props.company.email ? 
        <div>
          <p>email: {props.company.email}</p>
        </div>: null
      }
    </div>
  );
}
