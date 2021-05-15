import { Request } from "express";
import { User } from "../api/user/model";

export interface IRequest extends Request {
  state: {
    user: User;
  };
}
