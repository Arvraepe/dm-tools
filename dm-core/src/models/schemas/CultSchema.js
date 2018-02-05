const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
  AuditSchema,
  {
    "name": String,
    "goal": Object,
    "cultists": Object,
    "signaturespells": Object,
    "text": Array,
    "source": String
  }
]);