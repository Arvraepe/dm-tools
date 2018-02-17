import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from "../services/authentication.service";


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(public authentication:AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authentication.getToken()}`
            }
        });

        return next.handle(request);
    }
}
