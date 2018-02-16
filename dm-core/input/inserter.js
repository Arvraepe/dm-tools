const fetch = require('node-fetch');

const dev = 'https://dev-api.vindeenlesgever.be';
const local = 'https://dev-api.vindeenlesgever.be';

// CHANGE ENV URL HERE!
const url = dev;

const cultFiles = [
    './data/cults'
];

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

const headers = {
    'Content-Type': 'application/json'
};


const backgroundFiles = [
    './data/backgrounds'
];

const raceFiles = [
    './data/races'
];

const featFiles = [
    './data/feats'
];


// Truncate records
Promise.all([
    fetch(`${url}/spells`, { method: 'delete' }).then((result) => console.log('Truncated spells')),
    fetch(`${url}/cults`, { method: 'delete' }).then((result) => console.log('Truncated cults')),
    fetch(`${url}/creatures`, { method: 'delete' }).then((result) => console.log('Truncated creatures')),
    fetch(`${url}/backgrounds`, { method: 'delete' }).then((result) => console.log('Truncated backgrounds')),
    fetch(`${url}/races`, { method: 'delete' }).then((result) => console.log('Truncated races')),
    fetch(`${url}/feats`, { method: 'delete' }).then((result) => console.log('Truncated feats')),
]).then(() => {
    creatureFiles.forEach((file) => fetch(`${url}/creatures`, { method: 'post', body: JSON.stringify(require(file).monster), headers }).then((result) => console.log(`Created creatures [${file}]`)));
    spellFiles.forEach((file) => fetch(`${url}/spells`, { method: 'post', body: JSON.stringify(require(file).spell), headers }).then((result) => console.log(`Created spells [${file}]`)));
    cultFiles.forEach((file) => fetch(`${url}/cults`, { method: 'post', body: JSON.stringify(require(file).cult), headers }).then((result) => console.log(`Created cults [${file}]`)));
    backgroundFiles.forEach((file) => fetch(`${url}/backgrounds`, { method: 'post', body: JSON.stringify(require(file).background), headers }).then((result) => console.log(`Created backgrounds [${file}]`)));
    raceFiles.forEach((file) => fetch(`${url}/races`, { method: 'post', body: JSON.stringify(require(file).race), headers }).then((result) => console.log(`Created races [${file}]`)));
    featFiles.forEach((file) => fetch(`${url}/feats`, { method: 'post', body: JSON.stringify(require(file).feat), headers }).then((result) => console.log(`Created feat [${file}]`)));
});
