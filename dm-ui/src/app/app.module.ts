import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module.ts';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/observable/interval';
import {ShopsModule} from "./shops/shops.module";
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        ShopsModule,
        DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
