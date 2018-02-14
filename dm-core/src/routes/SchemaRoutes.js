const Router = require('express').Router();
const fs = require('fs');

const ResponseHelper = require('helpers/ResponseHelper');
const StringHelper = require('helpers/StringHelper');

Router.get('/', (req, res) => {

  const configurations = fs.readdirSync(`${Dir}/src/domain/configurations`)
    .filter((name) => name.split('.').length === 2)
    .map((name) => name.split('.')[0].toLowerCase())
    .map((model) => require(`domain/configurations/${StringHelper.camelize(model)}`));

  ResponseHelper.successResponse(req, res, configurations);
});

module.exports = Router;