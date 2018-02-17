const DBHelper = require('helpers/DBHelper');

module.exports = DBHelper.model('User', require('models/schemas/UserSchema'));
