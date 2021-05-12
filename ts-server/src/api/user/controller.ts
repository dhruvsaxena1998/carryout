import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
  res.send({ message: "user" });
};

export default { index };
