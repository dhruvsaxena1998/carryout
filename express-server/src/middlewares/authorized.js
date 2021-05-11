import connection from "../config/database.js";
import { verify } from "../utils/jsonwebtoken.js";

// Helpers
import Sanitize from "../helpers/sanitize.js";
import ErrorGenerator from "../helpers/error-generator.js";

const error = ErrorGenerator(
  "Not Authorized",
  "not-authorized",
  "authorization-headers"
);

export default (roles = []) => {
  return async (req, res, next) => {
    try {
      const authorizationHeader = req.headers["authorization"];
      if (!authorizationHeader) {
        return res.status(401).send(error);
      }

      const [, token] = authorizationHeader.split(/Bearer\s/);
      const { id, role } = verify(token);

      console.log(role);
      if (roles.indexOf(role) === -1) {
        return res.status(401).send(error);
      }

      const query = `
        SELECT
          user.id, user.name, user.phone, user.username, user.email, user.is_verified,
          role.name as role,
          media.url as media
        FROM USER
        LEFT JOIN role on role.id = role
        LEFT JOIN media on media.id = media
        WHERE user.id = ${id}
      `;
      const [[user]] = await connection.query(query);

      req.state = {
        user: Sanitize(user, { model: 'user' }),
      };

      next();
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };
};
