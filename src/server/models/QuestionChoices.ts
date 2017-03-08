import { Model, Collection, field, FieldTypes } from 'chen/sql';

export class QuestionChoices extends Model {

  protected table = 'question_choices';
  protected collectionClass = QuestionChoicesCollection;

  @field({guarded: true})
  public id: FieldTypes.Number;

  @field()
  public name: FieldTypes.String;

  @field()
  public image: FieldTypes.String;

  @field()
  public questionId: FieldTypes.Number;

  @field()
  public createdAt: FieldTypes.Date;

  @field()
  public updatedAt: FieldTypes.Date;
}

export class QuestionChoicesCollection extends Collection<QuestionChoices> {

  protected modelClass = QuestionChoices;
}
