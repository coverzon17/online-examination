import { Model, Collection, field, FieldTypes } from 'chen/sql';

export class Question extends Model {

  protected table = 'questions';
  protected collectionClass = QuestionCollection;

  @field({guarded: true})
  public id: FieldTypes.Number;

  @field()
  public name: FieldTypes.String;

  @field()
  public image: FieldTypes.String;

  @field()
  public answer: FieldTypes.Number;

  @field()
  public questionaireId: FieldTypes.Number;

  @field()
  public createdAt: FieldTypes.Date;

  @field()
  public updatedAt: FieldTypes.Date;

}

export class QuestionCollection extends Collection<Question> {

  protected modelClass = Question;
}
