export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _address: {
    street: string
    suite: string
    city: string
    zipcode: string
  };
  private _website: string;


  constructor(id: number, name: string, email: string, address: { street: string; suite: string; city: string; zipcode: string }, website: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._address = address;
    this._website = website;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): { street: string; suite: string; city: string; zipcode: string } {
    return this._address;
  }

  set address(value: { street: string; suite: string; city: string; zipcode: string }) {
    this._address = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }


}
