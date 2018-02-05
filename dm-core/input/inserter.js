const request = require('request');
const items = require('./data/cults');

items.cult.forEach((item) => request.post({url:'http://localhost:8080/cult', json: item}));