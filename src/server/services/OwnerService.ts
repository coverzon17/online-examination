import { injectable } from 'chen/core';
import { Service } from 'chen/sql';
import { Owner } from 'app/models';

@injectable()
export class OwnerService extends Service<Owner> {

  protected modelClass = Owner;
}
