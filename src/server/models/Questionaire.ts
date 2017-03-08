import { Model, Collection, field, FieldTypes } from 'chen/sql';

export class Questionaire extends Model {

  protected table = 'questionaires';
  protected collectionClass = QuestionaireCollection;

  @field({guarded: true})
  public id: FieldTypes.Number;

  @field()
  public archive: FieldTypes.Number;

  @field()
  public companyId: FieldTypes.Number;

  @field()
  public createdAt: FieldTypes.Date;

  @field()
  public updatedAt: FieldTypes.Date;
}

export class QuestionaireCollection extends Collection<Questionaire> {

  protected modelClass = Questionaire;
}
