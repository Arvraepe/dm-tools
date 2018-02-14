import {CultComponent} from "../components/entity/cult/cult.component";
import {SpellComponent} from "../components/entity/spells/spell.component";
import {CreatureComponent} from "../components/entity/creature/creature.component";
import {ShopComponent} from "../components/entity/shop/shop.component";

export const EntityComponentMappings = {
    cults: {
        entity: CultComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ]
    },

    spells: {
        entity: SpellComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ]
    },

    creatures: {
        entity: CreatureComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ]
    },

    shops: {
        entity: ShopComponent,
        columns: [
            { label: 'Name', path: ['name'] }
        ]
    }
};
