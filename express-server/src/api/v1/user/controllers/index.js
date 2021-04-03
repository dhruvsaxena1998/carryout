import ErrorGenerator from "@functions/error";
import User from "../models";
import sanitize from "../services/sanitize";

export default {
  me: async (req, res) => {
    // user ID is accessible here via res.locals.user
    const { user: id } = res.locals;

    try {
      const user = await User.findById(id);
      if (!user) {
        ErrorGenerator({ code: 404, message: "User not found" });
      }

      res.status(200).send(sanitize(user._doc));
    } catch (err) {
      res.status(err.code || 500).send({
        message: err.message,
        instance: err,
      });
    }
  },
};
