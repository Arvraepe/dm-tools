const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
  AuditSchema,
  {
    "name": { type: String },
    "items": Array,
    "shopkeeper": Object
  }
]);