import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/observable/interval';
import {ShopsModule} from "./shops/shops.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {EntitiesModule} from "./entities/entities.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {SpellComponent} from "./entities/components/entity/spells/spell.component";
import {CultComponent} from "./entities/components/entity/cult/cult.component";
import {CreatureComponent} from "./entities/components/entity/creature/creature.component";
import {ShopComponent} from "./entities/components/entity/shop/shop.component";

// Components that are dynamically loaded need to go here.
const entryComponents = [
    SpellComponent,
    CultComponent,
    CreatureComponent,
    ShopComponent
];

@NgModule({
    declarations: [
        AppComponent,
        ...entryComponents
    ],
    entryComponents,
    imports: [
        SharedModule,
        ShopsModule,
        EntitiesModule,
        DashboardModule,
        AuthenticationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
