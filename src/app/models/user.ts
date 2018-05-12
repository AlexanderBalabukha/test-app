export class User {
  'Name': string;
  'Email': string;
  'Address': string;
  'Phone number': string;
  'Image URL': string;

  constructor(name, email, address, number, image) {
    this['Name'] = name;
    this['Email'] = email;
    this['Address'] = address;
    this['Phone number'] = number;
    this['Image URL'] = image;
  }
}
