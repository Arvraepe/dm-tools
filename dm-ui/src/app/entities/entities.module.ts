import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {EntityComponent} from "./components/entity/entity.component";
import {EntityService} from "./services/entity.service";
import {CultComponent} from "./components/entity/cult/cult.component";
import {SpellComponent} from "./components/entity/spells/spell.component";
import {EntitiesComponent} from "./components/entities/entities.component";
import {DynamicEntityComponent} from "./components/entity/dynamic-entity.component";
import {DynamicEntityDirective} from "./components/entity/dynamic-entity.directive";

const components = [
    EntityComponent,
    EntitiesComponent
];

const directives = [
    DynamicEntityDirective
];

@NgModule({
    declarations: [ ...components, ...directives ],
    imports: [
        SharedModule
    ],
    providers: [
        EntityService
    ],
    exports: [ ...components, ...directives ]
})
export class EntitiesModule {
}
