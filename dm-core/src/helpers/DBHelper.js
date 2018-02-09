const Mongoose = require('mongoose');
const model = (name, schema, options = { versionKey: false, minimize: false }) => {
  const mSchema = new Mongoose.Schema(schema, options);

  console.log(mSchema);
  // Necessary for full text search
  mSchema.index({'$**': 'text'});

  return Mongoose.model(name, mSchema);
};

module.exports = { model };