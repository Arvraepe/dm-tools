const DBHelper = require('helpers/DBHelper');
const StringHelper = require('helpers/StringHelper');

const Models = { };

const compile = (config) => {

  const schema = require(`models/schemas/${config.name}Schema`);

  Models[config.name] = DBHelper.model(config.name, schema);

};

const collect = (config) => Models[config.name];

module.exports = { compile, collect };