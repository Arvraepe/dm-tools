import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared.module';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/observable/interval';
import {FilesModule} from "./files/files.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        FilesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
