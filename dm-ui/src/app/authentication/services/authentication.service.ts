import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject} from '../../../../../dm-core/node_modules/rxjs/BehaviorSubject.d';
import {Observable} from '../../../../../dm-core/node_modules/rxjs/Observable.d';
import {HttpClient} from '@angular/common/http';
import {map} from '../../../../../dm-core/node_modules/rxjs/operators.d';
import {environment} from '../../../environments/environment';

const toJson = (response) => response.json();

@Injectable()
export class AuthenticationService {

    constructor(
        private http: HttpClient
    ) {

    }
}
