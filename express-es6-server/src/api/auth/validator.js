import Joi from "joi";

const phone = Joi.string().length(10).regex(/^\d+$/).required();
const otp = Joi.string().length(6).regex(/^\d+$/).required();
const email = Joi.string().email().required();
const password = Joi.string().required();

export const login = (req, res, next) => {
  const schema = Joi.object({ phone, password });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export const register = (req, res, next) => {
  const schema = Joi.object({ phone, password, email });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export const verify = (req, res, next) => {
  const schema = Joi.object({ phone, otp });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export default { login, register, verify };
