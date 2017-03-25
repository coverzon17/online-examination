import { Controller, Request, Response } from 'chen/web';
import { injectable, ValidatorException, Hash } from 'chen/core';
import { OwnerService, CompanyService } from 'app/services';

@injectable()
export class UsersController extends Controller {

  constructor(private ownerService: OwnerService, private companyService: CompanyService) {
    super();
  }

  public async index(request: Request, response: Response) {
    return response.render('index');
  }

  public async login(request: Request, response: Response) {
    let data = request.input.all();
    this.ownerService.validate(data,{
      email: ['required', 'email'],
      password: ['required']
    });

    let account = await this.ownerService.findOne({email: data['email']});
    
    if (account && await Hash.check(data['password'], account.password.valueOf())) {
      request.auth().login(account);
    } else {
      throw new ValidatorException({password: ['incorrect password']});
    }

    return response.json({
      data: { 
        success: true
      }
    });
  }

  public async logout(request: Request, response: Response) {
    if (request.auth().user()) {
      request.auth().logout();
    };

    return response.json({data: {success: true}});
  }

  public async register(request: Request, response: Response) {
    let data = request.input.all();
    console.log(data);
    this.ownerService.validate(data, {
      email: ['required', 'email'],
      firstname: ['required'],
      lastname: ['required'],
      password: ['required'],
      confirm_password: [ 'required', 'same:password'],
      company_name: ['required']
    });

    let newOwner = await this.ownerService.create({
      email: data['email'],
      first_name: data['firstname'],
      last_name: data['lastname'],
      password: await Hash.make(data['password'])
    });

    if(newOwner) {
      await this.companyService.create({
        name: data['company_name'],
        email: data['company_email'],
        owner_id: newOwner.getId()
      });
      request.auth().login(newOwner);
    }

    return response.json({data: {success: true}});
  }

  public async show(request: Request, response: Response) {
    return response.json({data: {user: await request.auth().user()} });
  }

  public async hello(request: Request, response: Response) {
    return response.json({hello: "hello"});
  }
}
