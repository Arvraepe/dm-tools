const Express = require('express');
const BaseModel = require('models/base/BaseModel');
const BaseService = require('services/base/CrudService');
const ResponseHelper = require('helpers/ResponseHelper');
const ValidationHelper = require('helpers/ValidationHelper');
const ArrayHelper = require('helpers/ArrayHelper');

module.exports = (config) => {

  const Router = Express.Router();

  const Model = BaseModel.collect(config);
  const Service = BaseService(config);

  Router.get('/', (req, res) => {
    if (req.query.q) ResponseHelper.promiseResponseHandler(req, res, Service.fullTextSearch(req.requestor, req.query.q, req.query.deleted));
    else ResponseHelper.promiseResponseHandler(req, res, Service.findAll(req.requestor, req.query.deleted));
  });

  Router.get('/meta', (req, res) => ResponseHelper.successResponse(req, res, config));

  Router.get('/:id', (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.getById(req.requestor, req.params.id, req.query.deleted)));

  Router.get('/by/:column', (req, res) => {

    const column = Model.schema.paths[req.params.column];

    if (column && column.instance === 'Number') {
      const value = parseInt(req.query.value, 10);
      ResponseHelper.promiseResponseHandler(req, res, Service.getByProperty(req.requestor, { [req.params.column]: value }, req.query.deleted))
    } else {
      ResponseHelper.promiseResponseHandler(req, res, Service.getByProperty(req.requestor, { [req.params.column]: new RegExp(req.query.value, 'i') }, req.query.deleted))
    }

  });

  Router.post('/',
    ValidationHelper.modelValidator(Model),
    (req, res) => {

      if (ArrayHelper.isArray(req.body)) {
        ResponseHelper.promiseResponseHandler(req, res, Service.createMultiple(req.requestor, req.body))
      } else {
        ResponseHelper.promiseResponseHandler(req, res, Service.create(req.requestor, req.body))
      }

    }
  );

  Router.put('/:id',
    ValidationHelper.modelValidator(Model),
    (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.update(req.requestor, req.body))
  );

  Router.post('/search', (req, res) => {
    ResponseHelper.promiseResponseHandler(req, res, Service.getByProperty(req.requestor, req.body, req.query.deleted));
  });

  Router.delete('/:id', (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.remove(req.requestor, req.params.id)));

  Router.delete('/', (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.truncate(req.requestor)));


  // Initialize custom routes if set
  if (config.routes) {
    config.routes(config, Router);
  }

  return Router;
};