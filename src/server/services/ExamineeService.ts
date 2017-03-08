import { injectable } from 'chen/core';
import { Service } from 'chen/sql';
import { Examinee } from 'app/models';

@injectable()
export class ExamineeService extends Service<Examinee> {

  protected modelClass = Examinee;
}
