export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const sqlPagination = (query) => ({
  limit: parseInt(query.limit) || 10,
  offset: parseInt(query.offset) || 0,
});
