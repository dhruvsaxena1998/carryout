import jwt from "@utils/jsonwebtoken";

export default (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(403).send({
      message: "Un-Authorized!",
    });
  }

  try {
    const [, token] = authorization.split("Bearer ");
    const isAuthorized = jwt.verify(token);

    // Setting user-id to res.locals
    res.locals.user = isAuthorized.id;
    next();
  } catch (e) {
    return res.status(401).send({
      message: e.message,
      instance: e,
    });
  }
};
