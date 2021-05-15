import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const findOne = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    id: Joi.number().required().positive(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};

export const create = (req: Request, res: Response, next: NextFunction) => {
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
}
export default { findOne, create };
