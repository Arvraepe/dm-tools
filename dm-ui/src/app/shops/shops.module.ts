import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {ShopsListComponent} from "./components/shops-list/shops-list.component";
import {ShopsScrollsComponent} from "./components/shops-scrolls/shops-scrolls.component";

@NgModule({
    declarations: [
        ShopsListComponent,
        ShopsScrollsComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [],
    exports: [
        ShopsListComponent,
        ShopsScrollsComponent
    ]
})
export class ShopsModule {
}
