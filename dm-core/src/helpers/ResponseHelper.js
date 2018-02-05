
const unauthorized = (req, res) => res.status(401).send();
const notYetImplemented = (req, res) => res.status(501).send({ errors: [{ level: 'ERROR', message: 'NOT_IMPLEMENTED' }] });
const errorResponse = R.curry((req, res, err) => res.status(500).send({ errors: [{ level: 'ERROR', message: err }] }));
const successResponse = R.curry((req, res, data) => res.status(200).send(data));
const promiseResponseHandler = (req, res, promise) => {
  promise
    .then(successResponse(req, res))
    .catch(errorResponse(req, res));
};

module.exports = { notYetImplemented, errorResponse, successResponse, promiseResponseHandler, unauthorized };