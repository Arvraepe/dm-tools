const fs = require('fs');
const CrudRoutes = require('routes/base/CrudRoutes');

const names = fs.readdirSync(`${Dir}/src/models`)
  .filter((name) => name.split('.').length === 2)
  .map((name) => name.split('.')[0].toLowerCase());

const camelize = (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index == 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, '');

module.exports = (App) => names.forEach(
                                (model) => App.use(`/${model}`, CrudRoutes(require(`models/${camelize(model)}`)))
                          );