import {CultComponent} from "../components/entity/cult/cult.component";
import {SpellComponent} from "../components/entity/spells/spell.component";
import {CreatureComponent} from "../components/entity/creature/creature.component";
import {ShopComponent} from "../components/entity/shop/shop.component";

export const EntityComponentMappings = {
    cults: {
        entity: CultComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: []
    },

    spells: {
        entity: SpellComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: []
    },

    creatures: {
        entity: CreatureComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: []
    },

    shops: {
        entity: ShopComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: [
            { label: 'Build', icon: 'fa-gavel', data: {  } }
        ]
    }
};
