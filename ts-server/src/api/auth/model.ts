export interface LoginRequestBody {
  phone: number;
  password: string;
}

export interface RegisterRequestBody {
  phone: number;
  email: string;
  password: string;
}

export interface VerifyRequestBody {
  phone: number;
  otp: number;
}
