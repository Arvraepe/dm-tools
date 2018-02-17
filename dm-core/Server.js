// Better local requires
require('app-module-path').addPath(__dirname + '/src');

global.R = require('ramda');
global.Config = require(`./configurations/local.json`);
global.Dir = __dirname;

const Express = require('express');
const App = Express();

const BodyParser = require('body-parser');
App.use(BodyParser.json({ limit: '50mb' }));

App.use('files', Express.static('files'));

const Cors = require('cors');
App.use(Cors());

App.use(require('middleware/Authentication')());

require('helpers/RouteHelper')(App);

App.use('/schemas', require('routes/SchemaRoutes'));
App.use('/authentication', require('routes/AuthenticationRoutes'));

App.listen(Config.port, () => console.log(`Started DM-TOOLS Repository on port ${Config.port}...`));
