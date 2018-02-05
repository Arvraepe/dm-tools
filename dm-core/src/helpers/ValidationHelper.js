const modelValidator = (type) => (req, res, next) => {
  const model = new type(req.body);
  const error = model.validateSync();

  if (error) res.status(400).send(error.errors);
  else next ();

};

module.exports = { modelValidator };