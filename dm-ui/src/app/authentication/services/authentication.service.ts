import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import * as JWT from 'jsonwebtoken';

const toJson = (response) => response.json();

@Injectable()
export class AuthenticationService {

    private _user = new BehaviorSubject(null);

    get user () { return this._user.asObservable(); }

    constructor(
        private http: HttpClient
    ) {
        if (localStorage.getItem('token')) this.setCurrentUser();
    }

    authenticate (username, password) {
        return this.http.post(`${environment.api}/authentication/authenticate`, { username, password }).toPromise()
            .then((result) => {

                // Set token in local storage
                localStorage.setItem('token', result['token']);

                // Get user and store it in service
                this.setCurrentUser();

                // Return that user for anyone who would want it
                return this.getUserFromToken(result['token']);
            });
    }

    getToken () {
        return localStorage.getItem('token');
    }

    getUserFromToken (token) {
        return token ? JWT.decode(token) : null;
    }

    setCurrentUser () {
        this._user.next(this.getUserFromToken(this.getToken()));
    }
}
