export interface User {
  id: number;
  name: string;
  email: string;
  role: 'USER' | 'STAFF' | 'ADMIN';
}

export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  price: number;
  availableQuota: number;
}

export interface LoginResponse {
  token: string;
  expiresIn: number;
  user: User;
}
