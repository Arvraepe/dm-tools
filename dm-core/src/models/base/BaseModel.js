const DBHelper = require('helpers/DBHelper');
const StringHelper = require('helpers/StringHelper');

const Models = { };

const compile = (config) => Models[config.name] = DBHelper.model(config.name, require(`models/schemas/${config.name}Schema`));
const collect = (config) => Models[config.name];

module.exports = { compile, collect };