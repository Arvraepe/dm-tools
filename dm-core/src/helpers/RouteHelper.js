const fs = require('fs');
const CrudRoutes = require('routes/base/CrudRoutes');
const StringHelper = require('helpers/StringHelper');

const names = fs.readdirSync(`${Dir}/src/domain/configurations`)
  .filter((name) => name.split('.').length === 2)
  .map((name) => name.split('.')[0].toLowerCase());


module.exports = (App) => names.forEach((model) => {

  const config = require(`domain/configurations/${StringHelper.camelize(model)}`);

  App.use(`/${config.resource}`, CrudRoutes(config));
});