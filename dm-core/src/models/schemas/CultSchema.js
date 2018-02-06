const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
  AuditSchema,
  {
    "name": { type: String, unique: true },
    "goal": Object,
    "cultists": Object,
    "signaturespells": Object,
    "text": Array,
    "source": String
  }
]);