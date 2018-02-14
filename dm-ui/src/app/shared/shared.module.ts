import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from './../routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {SpellService} from "./services/spells.service";
import {HeaderComponent} from "./components/header/header.component";
import {BackComponent} from "./components/back/back.component";
import {SpacerComponent} from "./components/spacer/spacer.component";
import {SourceComponent} from "./components/source/source.component";

const modules = [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
];

const components = [
    HeaderComponent,
    BackComponent,
    SpacerComponent,
    SourceComponent
];

const directives = [

];

@NgModule({
    declarations: [...components, ...directives],
    imports: [...modules],
    exports: [...modules, ...components, ...directives],
    providers: [SpellService]
})
export class SharedModule {
}
