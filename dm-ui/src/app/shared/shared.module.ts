import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from './../routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {SpellService} from "./services/spells.service";
import {HeaderComponent} from "./components/header/header.component";

const modules = [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
];

const components = [
  HeaderComponent
];

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...modules, ...components],
    providers: [SpellService]
})
export class SharedModule {
}
