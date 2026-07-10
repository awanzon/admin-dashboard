export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: string;
  no: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  website?: string;
  role: string;
  active: boolean;
}
