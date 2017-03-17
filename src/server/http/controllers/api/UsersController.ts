import { Controller, Request, Response } from 'chen/web';
import { injectable, Validation, Hash } from 'chen/core';
import { OwnerService } from 'app/services';
@injectable()
export class UsersController extends Controller {

  constructor(private ownerService: OwnerService, private validation: Validation) {
    super();
  }

  public async index(request: Request, response: Response) {
    return response.render('index');
  }

  public async login(request: Request, response: Response) {
    let data = request.input.all();
    let validation = this.validation.make(data,{
      email: ['required', 'email'],
      password: ['required']
    });

    if (validation.fails()) {
      data = validation.getErrors()['content'];
    }

    let account = await this.ownerService.findOne({email: data['email']});
    if (data && account) {
      if (await Hash.check(data['password'], account.get('password'))) {
        request.auth().login(account);
        data = {isLogin: true, user: await request.auth().user()};
      } else {
        data = {message: 'incorrect password.', isLogin: false};
      }

    } else {
      data = {message: 'account not found'};
    }

    return response.json({data});
  }

  public async logout(request: Request, response: Response) {
    if (request.auth().user()) {
      request.auth().logout();
    };

    return response.redirect('/login');
  }

  public async register(request: Request, response: Response) {
    let data = request.input.all();
    this.ownerService.validate(data, {
      email: ['required', 'email'],
      first_name: ['required'],
      last_name: ['required'],
      password: ['required']
    });
  }

  public async hello(request: Request, response: Response) {
    return response.json({hello: "hello"});
  }
}
