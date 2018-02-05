import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from './routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

const modules = [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
];

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules]
})
export class SharedModule {
}
