import { injectable } from 'chen/core';
import { HttpMiddleware, Request, Response } from 'chen/web';

@injectable()
export class UserAuth extends HttpMiddleware {

  public async handle(request: Request, response: Response, next: Function) {
    if(request.auth() && !request.auth().getId()) {

      return response.redirect('/login');
    }

    next();
  }
}
