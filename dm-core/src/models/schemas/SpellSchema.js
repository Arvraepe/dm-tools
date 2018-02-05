const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
  AuditSchema,
  {
    "name": String,
    "level": Number,
    "school": String,
    "time": Array,
    "range": Object,
    "components": Object,
    "duration": Array,
    "classes": Object,
    "source": String,
    "entries": Array,
    "page": Number
  }
]);