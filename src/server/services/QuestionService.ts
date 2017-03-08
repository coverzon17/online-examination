import { injectable } from 'chen/core';
import { Service } from 'chen/sql';
import { Question } from 'app/models';

@injectable()
export class QuestionService extends Service<Question> {

  protected modelClass = Question;
}
