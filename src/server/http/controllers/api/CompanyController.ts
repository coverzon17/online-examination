import { Controller, Request, Response } from 'chen/web';
import { injectable } from 'chen/core';
import { CompanyService } from 'app/services';
@injectable()
export class CompanyController extends Controller {

  constructor(private companyService: CompanyService) {
    super();
  }

  public async index(request: Request, response: Response) {
    return response.render('index');
  }

  public async show(request: Request, response: Response) {
    let owner_id = request.auth().getId();

    let userCompanies: any = '';
    if(owner_id) userCompanies = await this.companyService.find({owner_id});

    return response.json({data: {companies: userCompanies}});
  } 
}
