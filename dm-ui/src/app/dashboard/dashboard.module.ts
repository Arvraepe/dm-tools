import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        SharedModule
    ],
    providers: [],
    exports: [DashboardComponent]
})
export class DashboardModule {
}
