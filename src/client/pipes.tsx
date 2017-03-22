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
