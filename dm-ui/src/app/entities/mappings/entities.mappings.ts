

import {CultComponent} from "../components/entity/view/cult/cult.component";
import {SpellComponent} from "../components/entity/view/spell/spell.component";
import {CreatureComponent} from "../components/entity/view/creature/creature.component";
import {FilterComponent} from "../components/entity/view/filter/filter.component";
import {ShopComponent} from "../components/entity/view/shop/shop.component";
import {FilterEditorComponent} from "../components/entity/editor/filter/filter-editor.component";
import {TableComponent} from "../components/entity/view/table/table.component";

const navigate = (view) => (entityType, entity, router) => {
    router.navigateByUrl(`/entities/${entityType}/${entity._id}/${view}`);
};

export const EntityComponentMappings = {
    cults: {
        views: {
            view: CultComponent,

        },
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: []
    },

    spells: {
        views: {
            view: SpellComponent,

        },
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: []
    },

    creatures: {
        views: {
            view: CreatureComponent,

        },
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: []
    },

    shops: {
        views: {
            view: ShopComponent,

        },
        columns: [
            { label: 'Name', path: ['name'] }
        ],
        actions: [
            { global: true, label: 'Build', icon: 'fa-gavel', data: {  } }
        ]
    },

    filters: {
        views: {
            view: FilterComponent,
            editor: FilterEditorComponent
        },
        columns: [
            { label: 'Name', path: ['name'] },
        ],
        actions: [
            { global: true, label: 'Build', icon: 'fa-gavel', perform: navigate('builder')  },
            { global: false, label: 'Edit', icon: 'fa-pencil', perform: navigate('editor') },
            { global: false, label: 'Remove', icon: 'fa-trash', perform: () => null }
        ],
    },

    tables: {
        views: {
            view: TableComponent,
        },
        columns: [
            { label: 'Name', path: ['name'] },
        ],
        actions: [

        ],
    }
};
