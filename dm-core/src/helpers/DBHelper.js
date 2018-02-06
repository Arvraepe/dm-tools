const Mongoose = require('mongoose');
const model = (name, schema, options = { versionKey: false, minimize: false }) => {
  const mSchema = new Mongoose.Schema(schema, options);

  // Necessary for full text search
  mSchema.index({ content: 'text' });

  return Mongoose.model(name, mSchema);
};

module.exports = { model };