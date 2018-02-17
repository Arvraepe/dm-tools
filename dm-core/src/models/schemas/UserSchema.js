const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
    AuditSchema,
    {
        "username": { type: String, unique: true },
        "password": String,
    }
]);