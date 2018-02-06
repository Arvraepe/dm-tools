const DBHelper = require('helpers/DBHelper');
const StringHelper = require('helpers/StringHelper');

module.exports = DBHelper.model(config.name, require(`models/schemas/${config.name}Schema`));