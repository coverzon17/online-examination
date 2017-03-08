import { Model, Collection, field, FieldTypes } from 'chen/sql';

export class Owner extends Model {

  protected table = 'owners';
  protected collectionClass = OwnerCollection;

  @field({guarded: true})
  public id: FieldTypes.Number;

  @field()
  public firstName: FieldTypes.String;

  @field()
  public lastName: FieldTypes.String;

  @field()
  public email: FieldTypes.String;

  @field()
  public password: FieldTypes.String;

  @field()
  public createdAt: FieldTypes.Date;

  @field()
  public updatedAt: FieldTypes.Date;

}

export class OwnerCollection extends Collection<Owner> {

  protected modelClass = Owner;
}
