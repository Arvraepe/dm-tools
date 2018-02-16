import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const toJson = (response) => response.json();

@Injectable()
export class AuthenticationService {

    constructor(
        private http: HttpClient
    ) {

    }
}
