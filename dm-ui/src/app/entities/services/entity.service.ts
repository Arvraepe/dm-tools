import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class EntityService {

    private _current = new BehaviorSubject(null);
    private _meta = new BehaviorSubject(null);

    get current () { return this._current.asObservable(); }
    get meta () { return this._meta.asObservable(); }

    constructor(
        private http: HttpClient
    ) {

    }

    setEntityType (entity) {
        this._current.next(entity);
        this.info();
    }

    getBase () {
        return `${environment.api}/${this._current.getValue()}`;
    }

    getAll () {
        return this.http.get(`${this.getBase()}`).toPromise();
    }

    search (query) {
        return this.http.get(`${this.getBase()}?q=${query}`).toPromise();
    }

    find (where) {
        return this.http.post(`${this.getBase()}`, where).toPromise();
    }

    info () {
        return this.http.get(`${this.getBase()}/meta`).toPromise()
            .then((meta) => {
                this._meta.next(meta);

                return meta;
            });
    }
}
