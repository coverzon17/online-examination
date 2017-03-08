import { Model, Collection, field, FieldTypes } from 'chen/sql';

export class Examinee extends Model {

  protected table = 'examinees';
  protected collectionClass = ExamineeCollection;

  @field({guarded: true})
  public id: FieldTypes.Number;

  @field()
  public firstName: FieldTypes.String;

  @field()
  public lastName: FieldTypes.String;

  @field()
  public questionaireId: FieldTypes.Number;

  @field()
  public link: FieldTypes.String;

  @field()
  public score: FieldTypes.Number;

  @field()
  public createdAt: FieldTypes.Date;

  @field()
  public updatedAt: FieldTypes.Date;

}

export class ExamineeCollection extends Collection<Examinee> {

  protected modelClass = Examinee;
}
