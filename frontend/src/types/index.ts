export interface LoginResponse {
  token: string;
  expiresIn: number;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  price: number;
}

export interface Ticket {
  id: string;
  eventName: string;
  status: string;
  date?: string; 
  location?: string;
  qrSignaturePayload?: string;
}