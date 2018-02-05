import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SharedModule} from "../shared.module";
import {FileListComponent} from "./components/file-list.component";

@NgModule({
    declarations: [
        FileListComponent
    ],
    imports: [
        FormsModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [],
    exports: [
        FileListComponent
    ]
})
export class FilesModule {
}
