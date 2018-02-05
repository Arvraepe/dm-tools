const DBHelper = require('helpers/DBHelper');
const CultSchema = require('models/schemas/CultSchema');

module.exports = DBHelper.model('Cult', CultSchema);
