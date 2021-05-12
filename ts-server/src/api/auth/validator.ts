import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const PhoneValidation = Joi.string().length(10).regex(/^\d+$/).required();
const OTPValidation = Joi.string().length(6).regex(/^\d+$/).required();
const EmailValidation = Joi.string().email().required();
const PasswordValidation = Joi.string().required();

export const LoginValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    phone: PhoneValidation,
    password: PasswordValidation,
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export const RegisterValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    phone: PhoneValidation,
    email: EmailValidation,
    password: PasswordValidation,
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export const VerifyOTPValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    phone: PhoneValidation,
    otp: OTPValidation,
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export default {
  login: LoginValidator,
  register: RegisterValidator,
  verify: VerifyOTPValidator,
};
