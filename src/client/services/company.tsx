import { http, formatResponse } from '../http';

export class Company {
  static getUserCompany(cb: Function) {
  	return http.get('/api/companies', null, formatResponse(cb));
  }
}