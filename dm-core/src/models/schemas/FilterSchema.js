const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
  AuditSchema,
  {
    "name": { type: String, unique: true },
    "entity": String,
    "where": String
  }
]);