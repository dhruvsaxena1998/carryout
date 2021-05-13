import { client } from "../../config/database";

// Types
import { Request, Response } from "express";

// Helper

// Utils

export const index = async (req: Request, res: Response) => {
  res.send({ message: "{{apiName}}" });
};

export default { index };
