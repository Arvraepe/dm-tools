const DBHelper = require('helpers/DBHelper');
const StringHelper = require('helpers/StringHelper');

module.exports = (config) => DBHelper.model(StringHelper.camelize(config.name), require(`models/schemas/${StringHelper.camelize(config.name)}Schema`));