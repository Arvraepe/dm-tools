const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
    AuditSchema,
    {
        "key": { required: true, unique: true, type: String },
        "name": { required: true, unique: false, type: String },
        "items": Array
    }
]);