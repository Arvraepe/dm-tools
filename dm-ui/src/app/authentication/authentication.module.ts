import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AuthenticationService} from "./services/authentication.service";
import {LoginComponent} from "./components/login/login.component";

const components = [
    LoginComponent
];

@NgModule({
    declarations: [...components],
    imports: [
        SharedModule
    ],
    providers: [AuthenticationService],
    exports: [...components]
})
export class AuthenticationModule {
}
