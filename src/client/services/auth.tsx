import { http, formatResponse } from '../http';
import { KeyValuePair } from 'chen-react';

export class Auth {
  
  static login(email: string, password: string, cb: Function) {
  	let data = { email, password };
  	return http.post('/api/user/login', JSON.stringify(data), formatResponse(cb));
  }

  static logout(cb: Function) {
  	return http.post('/api/user/logout', null , formatResponse(cb));
  } 

  static getCurrentUser(cb: Function) {
    return http.get('/api/user/current', null, formatResponse(cb));
  }

  static checkCurrentUser(nextState, replace, next) {
  	Auth.getCurrentUser((res, err) => {
  	  if (!res) replace('/login');
  	  next();
  	});
  }

  static register(data: KeyValuePair<any>, cb: Function) {
  	return http.post('/api/user/register', JSON.stringify(data), formatResponse(cb));
  }
}