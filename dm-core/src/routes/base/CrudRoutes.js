const BaseModel = require('models/base/BaseModel');
const ResponseHelper = require('helpers/ResponseHelper');
const ValidationHelper = require('helpers/ValidationHelper');

module.exports = (config) => {

  const Router = require('express').Router();

  const Model = BaseModel.collect(config);
  const Service = require('services/base/CrudService')(config);

  Router.get('/', (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.findAll(req.requestor)));
  Router.get('/:id', (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.getById(req.requestor, req.params.id, req.query.deleted)));
  Router.get('/by/:column', (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.getByProperty(req.requestor, { [req.param.column]: req.query.value }, req.query.deleted)));

  Router.post('/',
    ValidationHelper.modelValidator(Model),
    (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.create(req.requestor, req.body))
  );

  Router.put('/:id',
    ValidationHelper.modelValidator(Model),
    (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.update(req.requestor, req.body))
  );

  Router.delete('/:id', (req, res) => ResponseHelper.promiseResponseHandler(req, res, Service.remove(req.requestor, req.params.id)));

  return Router;
};