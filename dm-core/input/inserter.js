const fetch = require('node-fetch');

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
    fetch('http://localhost:9002/spells', { method: 'delete' }).then((result) => console.log('Truncated spells')),
    fetch('http://localhost:9002/cults', { method: 'delete' }).then((result) => console.log('Truncated cults')),
    fetch('http://localhost:9002/creatures', { method: 'delete' }).then((result) => console.log('Truncated creatures')),
    fetch('http://localhost:9002/backgrounds', { method: 'delete' }).then((result) => console.log('Truncated backgrounds')),
    fetch('http://localhost:9002/races', { method: 'delete' }).then((result) => console.log('Truncated races')),
    fetch('http://localhost:9002/feats', { method: 'delete' }).then((result) => console.log('Truncated feats')),
]).then(() => {
    creatureFiles.forEach((file) => fetch('http://localhost:9002/creatures', { method: 'post', body: JSON.stringify(require(file).monster), headers }).then((result) => console.log(`Created creatures [${file}]`)));
    spellFiles.forEach((file) => fetch('http://localhost:9002/spells', { method: 'post', body: JSON.stringify(require(file).spell), headers }).then((result) => console.log(`Created spells [${file}]`)));
    cultFiles.forEach((file) => fetch('http://localhost:9002/cults', { method: 'post', body: JSON.stringify(require(file).cult), headers }).then((result) => console.log(`Created cults [${file}]`)));
    backgroundFiles.forEach((file) => fetch('http://localhost:9002/backgrounds', { method: 'post', body: JSON.stringify(require(file).background), headers }).then((result) => console.log(`Created backgrounds [${file}]`)));
    raceFiles.forEach((file) => fetch('http://localhost:9002/races', { method: 'post', body: JSON.stringify(require(file).race), headers }).then((result) => console.log(`Created races [${file}]`)));
    featFiles.forEach((file) => fetch('http://localhost:9002/feats', { method: 'post', body: JSON.stringify(require(file).feat), headers }).then((result) => console.log(`Created feat [${file}]`)));
});
