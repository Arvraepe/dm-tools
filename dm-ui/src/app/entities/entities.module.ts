import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {EntityComponent} from "./components/entity/entity.component";
import {EntityService} from "./services/entity.service";

@NgModule({
    declarations: [
        EntityComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        EntityService
    ],
    exports: [
        EntityComponent
    ]
})
export class EntitiesModule {
}
