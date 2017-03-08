import { injectable } from 'chen/core';
import { Service } from 'chen/sql';
import { Questionaire } from 'app/models';

@injectable()
export class QuestionaireService extends Service<Questionaire> {

  protected modelClass = Questionaire;
}
