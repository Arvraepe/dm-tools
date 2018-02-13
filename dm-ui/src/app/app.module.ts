import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/observable/interval';
import {ShopsModule} from "./shops/shops.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {EntitiesModule} from "./entities/entities.module";
import {AuthenticationModule} from "./authentication/authentication.module";

@NgModule({
    declarations: [
        AppComponent
    ],
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
