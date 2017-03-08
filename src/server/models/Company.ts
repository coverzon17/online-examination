import { Model, Collection, field, FieldTypes } from 'chen/sql';

export class Company extends Model {

  protected table = 'companies';
  protected collectionClass = CompanyCollection;

  @field({guarded: true})
  public id: FieldTypes.Number;

  @field()
  public name: FieldTypes.String;

  @field()
  public email: FieldTypes.String;

  @field()
  public ownerId: FieldTypes.Number;

  @field()
  public createdAt: FieldTypes.Date;

  @field()
  public updatedAt: FieldTypes.Date;
}

export class CompanyCollection extends Collection<Company> {

  protected modelClass = Company;
}
