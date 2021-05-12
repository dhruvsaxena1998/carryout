export interface LoginRequestBody {
  phone: number;
  password: string;
}

export interface RegisterRequestBody {
  phone: number;
  email: string;
  password: string;
}
