const mongoose = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false, // DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated
  useCreateIndex: true, // DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
};

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, options);
  } catch (err) {
    throw err;
  }
};
