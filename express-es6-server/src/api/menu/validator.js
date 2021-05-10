import Joi from "joi";

export const create = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required(),
    media: Joi.number().required(),
    items: Joi.array()
      .items(
        Joi.object({
          id: Joi.number().required(),
          category: Joi.string().default("item"),
        })
      )
      .required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export const findOne = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  const { error } = schema.validate(req.params);

  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export default { create, findOne };
