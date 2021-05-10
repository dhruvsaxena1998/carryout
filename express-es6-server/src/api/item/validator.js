import Joi from "joi";

export const create = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().positive(),
    defaultQty: Joi.number().required().positive().allow(0),
    maxQty: Joi.number().positive().default(1),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details);
  }
  next();
};

export default { create };
