export interface User {
  id: string;
  no: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  //
  address: string;
  // street: string; 
  // city: string; 
  // zipcode: string;
  //
  website?: string;
  role: string;
  active: boolean;
}