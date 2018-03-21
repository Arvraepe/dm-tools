const fetch = require('node-fetch');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;

const fs = require('fs');

const urls = [
    { key: 'teleportation-mishaps', name: 'Teleportation mishaps', url: "http://dndspeak.com/2018/02/100-teleportation-mishaps/" },
    { key: 'dwarven-clans', name: 'Dwarven clans', url: "http://dndspeak.com/2018/02/100-dwarven-clan-names/" },
    { key: 'factions', name: 'Factions', url: "http://dndspeak.com/2018/02/100-factions/" },
    { key: 'adventurers', name: 'Adventurers', url: "http://dndspeak.com/2018/01/100-adventurers/" },
    { key: 'campfire-stories', name: 'Campfire stories', url: "http://dndspeak.com/2018/01/100-topics-for-a-campfire-story/" },
    { key: 'npc-catchphrases', name: 'NPC Catchphrases', url: "http://dndspeak.com/2018/01/100-npc-catchphrases/" },
    { key: 'thought-secrets', name: 'Thought secrets', url: "http://dndspeak.com/2017/12/100-secrets-revealed-through-detect-thoughts/" },
    { key: 'secret-societies', name: 'Secret societies', url: "http://dndspeak.com/2017/12/100-secret-societies/" },
    { key: 'drunken-boasts', name: 'Drunken boasts', url: "http://dndspeak.com/2017/12/100-drunken-boasts/" },
];

const transformToTables = (tables) => {
    return tables.map((table) => {
        const document = new dom().parseFromString(table.html);
        const items = xpath.select("//ol/li/text()", document).map((text) => text.data);

        table.items = items;

        delete table.html;
        delete table.url;

        return table;
    });
};

const saveAsJsons = (tables) => {
    tables.forEach((table) => {
        fs.writeFileSync(`data/tables/${table.key}.json`, JSON.stringify(table));
    });
};

Promise.all(
    urls.map((table) => fetch(table.url).then((response) => {
        return response.text().then((html) => {
            table.html = html;
            return table;
        });
    }))
).then(transformToTables)
.then(saveAsJsons);