import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from './../routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {SpellService} from "./services/spells.service";

const modules = [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
];

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules],
    providers: [SpellService]
})
export class SharedModule {
}
