const BaseService = require('services/base/CrudService');
const RandomHelper = require('helpers/RandomHelper');

const ResponseHelper = require('helpers/ResponseHelper');

module.exports = (config, Router) => {

    const Service = BaseService(config);

    Router.get('/:id/roll', (req, res) => {
        ResponseHelper.promiseResponseHandler(req, res, Service.getById(req.requestor, req.params.id, req.query.deleted).then((table) => {
            const times = req.query.times || 1;

            return R.range(0, parseInt(times)).map(() => table.items[RandomHelper.getRandomInt(0, table.items.length)]);
        }));
    });

};