import { Request } from "express";

export interface Pagination {
  limit: number;
  offset: number;
}

export default (req: Request) => {
  const { limit = 10, offset = 0 } = req.query;

  return {
    limit: +limit,
    offset: +offset,
  };
};
