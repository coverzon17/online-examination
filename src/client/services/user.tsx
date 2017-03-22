import { http, formatResponse } from '../http';
import { KeyValuePair } from 'chen-react';
export class User {

  static register(data: KeyValuePair<any>, cb: Function) {
  	return http.post('/api/user/register', JSON.stringify(data), formatResponse(cb));
  }
}