const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
    AuditSchema,
    {
        "name": String,
        "prerequisite": Array,
        "source": String,
        "entries": Array,
        "ability": Object
    }
]);