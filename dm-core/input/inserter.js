const request = require('request');

const cults = require('./data/cults');
const spellFiles = [
    './data/spells/spells-phb',
    './data/spells/spells-scag',
    './data/spells/spells-xge'
];
const creatureFiles = [
    './data/bestiary/bestiary-dmg',
    './data/bestiary/bestiary-mm',
    './data/bestiary/bestiary-vgm',
    './data/bestiary/bestiary-xge'
    // './data/bestiary/bestiary-skt',
    // './data/bestiary/bestiary-cos',
    // './data/bestiary/bestiary-toa',
    // './data/bestiary/bestiary-rot',
    // './data/bestiary/bestiary-tftyp',
    // './data/bestiary/bestiary-hotdq',
    // './data/bestiary/bestiary-lmop',
    // './data/bestiary/bestiary-oota',
    // './data/bestiary/bestiary-pota'
];


// Truncate records
request.delete({ url: 'http://localhost:8080/spells'}, (error, response, body) => console.log("Spells Truncated: " + JSON.parse(body).n));
request.delete({ url: 'http://localhost:8080/cults'}, (error, response, body) => console.log("Cults Truncated: " + JSON.parse(body).n));
request.delete({ url: 'http://localhost:8080/creatures'}, (error, response, body) => console.log("Creatures Truncated: " + JSON.parse(body).n));

// Insert records
creatureFiles.forEach((file) => require(file).monster.forEach((item) => request.post({ url:'http://localhost:8080/creatures', json: item })));
spellFiles.forEach((file) => require(file).spell.forEach((item) => request.post({ url:'http://localhost:8080/spells', json: item })));
cults.cult.forEach((item) => request.post({ url:'http://localhost:8080/cults', json: item }));