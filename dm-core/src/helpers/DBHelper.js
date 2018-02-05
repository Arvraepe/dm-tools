const Mongoose = require('mongoose');
const model = (name, schema, options = { versionKey: false, minimize: false }) => Mongoose.model(name, new Mongoose.Schema(schema, options));

module.exports = { model };