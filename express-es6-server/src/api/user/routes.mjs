import { Router as _Router } from "express";
const Router = _Router();

Router.get("/", (req, res) => {
  res.send({ user: true });
});

export default Router;
