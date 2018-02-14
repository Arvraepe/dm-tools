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


// Truncate records
Promise.all([
    fetch('http://localhost:8080/spells', { method: 'delete' }).then((result) => console.log('Truncated spells')),
    fetch('http://localhost:8080/cults', { method: 'delete' }).then((result) => console.log('Truncated cults')),
    fetch('http://localhost:8080/creatures', { method: 'delete' }).then((result) => console.log('Truncated creatures'))
]).then(() => {
    creatureFiles.forEach((file) => fetch('http://localhost:8080/creatures', { method: 'post', body: JSON.stringify(require(file).monster), headers }).then((result) => console.log(`Created creatures [${file}]`)));
    spellFiles.forEach((file) => fetch('http://localhost:8080/spells', { method: 'post', body: JSON.stringify(require(file).spell), headers }).then((result) => console.log(`Created spells [${file}]`)));
    cultFiles.forEach((file) => fetch('http://localhost:8080/cults', { method: 'post', body: JSON.stringify(require(file).cult), headers }).then((result) => console.log(`Created cults [${file}]`)));
});
