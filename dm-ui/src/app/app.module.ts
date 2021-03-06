import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/observable/interval';
import {DashboardModule} from "./dashboard/dashboard.module";
import {EntitiesModule} from "./entities/entities.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {SpellComponent} from "./entities/components/entity/view/spell/spell.component";
import {CultComponent} from "./entities/components/entity/view/cult/cult.component";
import {CreatureComponent} from "./entities/components/entity/view/creature/creature.component";
import {ShopComponent} from "./entities/components/entity/view/shop/shop.component";
import {FilterComponent} from "./entities/components/entity/view/filter/filter.component";
import {FilterEditorComponent} from "./entities/components/entity/editor/filter/filter-editor.component";
import {TableComponent} from "./entities/components/entity/view/table/table.component";

// Components that are dynamically loaded need to go here.
const entryComponents = [
    SpellComponent,
    CultComponent,
    CreatureComponent,
    ShopComponent,
    FilterComponent,
    FilterEditorComponent,
    TableComponent
];

@NgModule({
    declarations: [
        AppComponent,
        ...entryComponents
    ],
    entryComponents,
    imports: [
        SharedModule,
        EntitiesModule,
        DashboardModule,
        AuthenticationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
