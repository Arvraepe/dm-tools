const request = require('request');
const items = require('./data/spells/spells-phb');

items.cult.forEach((item) => request.post({url:'http://localhost:8080/spells', json: item}));