const User = require('models/User');
const UserRepository = require('repositories/base/CrudRepository')({ model: User });

const JWT = require('jsonwebtoken');

const authenticate = (username, password) => {

  /*

    Root login

   {
     "username": "root",
     "password": "thiswillgoliveiamsure"
   }


   */

  // TODO: This is the hardcoded root user login (for empty databases)
  if (username === 'root' && password === 'thiswillgoliveiamsure') {

    const RootUser = {
      "_id" : "SYSTEM",
      "username" : "root",
      "createdBy" : "SYSTEM",
      "createdOn" : "2017-08-10T09:46:34.432Z",
      "lastModifiedBy" : "SYSTEM",
      "lastModifiedOn" : "2017-08-10T10:49:18.542Z"
    };

    return Promise.resolve(JWT.sign(RootUser, Config.secret));

  } else {
    return UserRepository.getByProperties({ username }).then((users) => {
      const user = R.head(users);

      if (user && user.password === password) {

        return JWT.sign(R.omit(['password'], user), Config.secret);
      }

      return null;
    });
  }
};

const create = (username, password) => {

    const raw = { username, password };

    raw.createdBy = 'SYSTEM';
    raw.createdOn = new Date();

    raw.lastModifiedBy = 'SYSTEM';
    raw.lastModifiedOn = new Date();

    return UserRepository.create(raw);

};

module.exports = { authenticate, create };