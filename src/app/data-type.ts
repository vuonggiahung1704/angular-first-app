export interface SignUp {
  name: String;
  password: String;
  email: String;
}

export interface Login {
  email: String;
  password: String;
}

export interface Product {
  id: Number;
  name: String;
  description: String;
  price: Number;
  quantity: Number;
  image: String;
}
