import { injectable } from 'chen/core';
import { Service } from 'chen/sql';
import { QuestionChoices } from 'app/models';

@injectable()
export class QuestionChoicesService extends Service<QuestionChoices> {

  protected modelClass = QuestionChoices;
}
