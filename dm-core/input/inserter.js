const request = require('request');

const cults = require('./data/cults');
const spellFiles = [
    './data/spells/spells-phb',
    './data/spells/spells-scag',
    './data/spells/spells-xge'
];


// Truncate records
request.delete({ url: 'http://localhost:8080/spells'}, (error, response, body) => console.log("Spells Truncated: " + JSON.parse(body).n));
request.delete({ url: 'http://localhost:8080/cults'}, (error, response, body) => console.log("Cults Truncated: " + JSON.parse(body).n));

// Insert records
spellFiles.forEach((file) => require(file).spell.forEach((item) => request.post({ url:'http://localhost:8080/spells', json: item })));
cults.cult.forEach((item) => request.post({ url:'http://localhost:8080/cults', json: item }));