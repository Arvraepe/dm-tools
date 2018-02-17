const Router = require('express').Router();
const UserService = require('services/UserService');
const ResponseHelper = require('helpers/ResponseHelper');

Router.post('/authenticate', (req, res) => {
  UserService.authenticate(req.body.username, req.body.password)
    .then((token) => {
      if (token) ResponseHelper.successResponse(req, res, { token });
      else ResponseHelper.unauthorized(req,res)
    })
    .catch((err) => ResponseHelper.errorResponse(req, res, err));
});

Router.post('/', (req, res) => ResponseHelper.promiseResponseHandler(req, res, UserService.create(req.body.username, req.body.password)));

module.exports = Router;