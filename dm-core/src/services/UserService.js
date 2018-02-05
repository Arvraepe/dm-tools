const User = require('models/User');
const UserRepository = require('repositories/base/CrudRepository')(User);

const JWT = require('jsonwebtoken');

const authenticate = (username, password) => {

  /*

    Root login

   {
     "application": "5988619a3de0d1112ee2bc88",
     "email": "admin@jstack.eu",
     "password": "prutser123"
   }


   */

  // TODO: This is the hardcoded root user login (for empty databases)
  if (username === 'cwadmin' && password === 'prutser123') {

    const RootUser = {
      "_id" : "SYSTEM",
      "username" : "cwadmin",
      "email": "info@codewars.com",
      "createdBy" : "SYSTEM",
      "createdOn" : "2017-08-10T09:46:34.432Z",
      "lastModifiedBy" : "SYSTEM",
      "lastModifiedOn" : "2017-08-10T10:49:18.542Z",
      "permissions": []
    };

    return Promise.resolve(JWT.sign(RootUser, Config.secret));

  } else {
    return UserRepository.getByProperties({ username }).then((users) => {

      const user = R.head(users);

      if (user && user.password === password) {

        return JWT.sign(data, Config.secret);
      }

      return null;
    });
  }
};

module.exports = { authenticate };