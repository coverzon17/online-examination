import { injectable } from 'chen/core';
import { Service } from 'chen/sql';
import { Company } from 'app/models';

@injectable()
export class CompanyService extends Service<Company> {

  protected modelClass = Company;
}
