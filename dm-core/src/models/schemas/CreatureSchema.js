const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
  AuditSchema,
  {
    "name": { type: String, unique: true },
    "size": String,
    "type": Object,
    "source": String,
    "alignment": String,
    "ac": String,
    "hp": String,
    "speed": String,
    "str": Number,
    "dex": Number,
    "con": Number,
    "wis": Number,
    "int": Number,
    "cha": Number,
    //"save": String,
    "skill": Object,
    "passive": Number,
    "languages": String,
    "cr": String,
    "trait": Array,
    "action": Array,
    "spells": String,
    "page": Number
  }
]);