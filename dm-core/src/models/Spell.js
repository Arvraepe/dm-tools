const DBHelper = require('helpers/DBHelper');
const SpellSchema = require('models/schemas/SpellSchema');

module.exports = DBHelper.model('Spell', SpellSchema);
