import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AuthenticationService} from "./services/authentication.service";
import {LoginComponent} from "./components/login/login.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthenticationInterceptor} from "./interceptors/authentication.interceptor";

const components = [
    LoginComponent
];

@NgModule({
    declarations: [...components],
    imports: [
        SharedModule
    ],
    providers: [
        AuthenticationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenticationInterceptor,
            multi: true
        }
    ],
    exports: [...components]
})
export class AuthenticationModule {
}
