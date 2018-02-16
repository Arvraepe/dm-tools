const AuditSchema = require('models/schemas/AuditSchema');
module.exports = R.mergeAll([
    AuditSchema,
    {
        "name": String,
        "source": String,
        "page": Number,
        "skillProficiencies": String,
        "trait": Array
    }
]);