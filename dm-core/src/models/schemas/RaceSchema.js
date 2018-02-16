const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
    AuditSchema,
    {
        "name": String,
        "source": String,
        "size": String,
        "speed": String,
        "ability": Object,
        "trait": Array
    }
]);