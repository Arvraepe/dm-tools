import {CultComponent} from "../components/entity/cult/cult.component";
import {SpellComponent} from "../components/entity/spells/spell.component";
import {CreatureComponent} from "../components/entity/creature/creature.component";
import {ShopComponent} from "../components/entity/shop/shop.component";

export const EntityComponentMappings = {
    cults: {
        entity: CultComponent
    },

    spells: {
        entity: SpellComponent
    },

    creatures: {
        entity: CreatureComponent
    },

    shops: {
        entity: ShopComponent
    }
};
