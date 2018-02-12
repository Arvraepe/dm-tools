module.exports = (config, Router) => {

  Router.post('/generate', (req, res) => {
    res.send(req.body);
  });

};