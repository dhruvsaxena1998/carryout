"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

const create = async (ctx) => {
  const { user } = ctx.state;

  const wallet = await strapi.query("wallet").create({
    active: true,
    credit: "0",
    user: user.id,
  });

  return sanitizeEntity(wallet, { model: strapi.models.wallet });
};

module.exports = {
  create
};
