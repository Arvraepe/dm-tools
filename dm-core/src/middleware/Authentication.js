const JWT = require('jsonwebtoken');
const ResponseHelper = require('helpers/ResponseHelper');

const Authentication = (config) => (req, res, next) => {

  const excluded = [
    '/authentication'
  ];

  if (excluded.some((url) => req.path.startsWith(url))) {
   next();
  } else {
   const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null;

   JWT.verify(token, Config.secret, (err, user) => {
     if (err) ResponseHelper.unauthorized(req, res);
     else {
       req.requestor = R.clone(user);
       next();
     }
   });
  }
};

module.exports = Authentication;