import { React, ReactDOM } from 'chen-react';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

export const CONTENT = (
  <Router routes={routes} history={browserHistory} />
);

if (typeof document != 'undefined' && document.getElementById) {
  ReactDOM.render(CONTENT, document.getElementById('chen-react-main'));
}
