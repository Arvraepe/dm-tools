const fetch = require('node-fetch');

const dev = 'https://dev-api.vindeenlesgever.be';
const local = 'http://localhost:9002';

// CHANGE ENV URL HERE!
const url = local;

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

const backgroundFiles = [
    './data/backgrounds'
];

const raceFiles = [
    './data/races'
];

const featFiles = [
    './data/feats'
];

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTk3ZjgyNDlkMzU5YTNjMmQ3YTc2ODUiLCJ1c2VybmFtZSI6InRlc3QiLCJjcmVhdGVkQnkiOiJTWVNURU0iLCJjcmVhdGVkT24iOiIyMDE4LTAzLTAxVDEyOjU1OjAwLjY1NloiLCJsYXN0TW9kaWZpZWRCeSI6IlNZU1RFTSIsImxhc3RNb2RpZmllZE9uIjoiMjAxOC0wMy0wMVQxMjo1NTowMC42NTZaIiwiaWF0IjoxNTE5OTA5ODc4fQ.RjFkpOEnDsktuo5Cg_n_1L3Gas3X7wx1iDoczkJz0cs'
};


// Truncate records
Promise.all([
    fetch(`${url}/spells`, { method: 'delete' }).then((result) => console.log('Truncated spells')),
    fetch(`${url}/cults`, { method: 'delete' }).then((result) => console.log('Truncated cults')),
    fetch(`${url}/creatures`, { method: 'delete' }).then((result) => console.log('Truncated creatures')),
    fetch(`${url}/backgrounds`, { method: 'delete' }).then((result) => console.log('Truncated backgrounds')),
    fetch(`${url}/races`, { method: 'delete' }).then((result) => console.log('Truncated races')),
    fetch(`${url}/feats`, { method: 'delete' }).then((result) => console.log('Truncated feats')),
]).then(() => {
    creatureFiles.forEach((file) => fetch(`${url}/creatures`, { method: 'post', headers, body: JSON.stringify(require(file).monster), headers }).then((result) => console.log(`Created creatures [${file}]`)));
    spellFiles.forEach((file) => fetch(`${url}/spells`, { method: 'post', headers, body: JSON.stringify(require(file).spell), headers }).then((result) => console.log(`Created spells [${file}]`)));
    cultFiles.forEach((file) => fetch(`${url}/cults`, { method: 'post', headers, body: JSON.stringify(require(file).cult), headers }).then((result) => console.log(`Created cults [${file}]`)));
    backgroundFiles.forEach((file) => fetch(`${url}/backgrounds`, { method: 'post', headers, body: JSON.stringify(require(file).background), headers }).then((result) => console.log(`Created backgrounds [${file}]`)));
    raceFiles.forEach((file) => fetch(`${url}/races`, { method: 'post', headers, body: JSON.stringify(require(file).race), headers }).then((result) => console.log(`Created races [${file}]`)));
    featFiles.forEach((file) => fetch(`${url}/feats`, { method: 'post', headers, body: JSON.stringify(require(file).feat), headers }).then((result) => console.log(`Created feat [${file}]`)));
});
