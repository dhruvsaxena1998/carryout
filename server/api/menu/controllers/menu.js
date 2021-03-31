"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");
const cache = require("../../../utils/cache");
module.exports = {
  find: async (ctx) => {
    const hasCache = cache.has("menu");
    if (hasCache) {
      return JSON.parse(cache.get("menu"));
    }

    const entities = await strapi.query("menu").find();

    const sanitized = sanitizeEntity(entities, { model: strapi.models.menu });
    cache.set("menu", JSON.stringify(sanitized), 1000);

    return sanitized;
  },
};
