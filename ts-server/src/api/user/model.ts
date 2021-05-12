export interface User {
  id: number;
  phone: number;
  username: string;
  email: string;
  role: number | string;
  is_verified: number | Boolean;
  name?: string;
  password?: string;
  otp?: number;
  media?: string;
}
