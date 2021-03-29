"use strict";
// NOT-ALLOWED
module.exports = async (ctx) => {
  return ctx.throw(403, "Forbidden");
};
