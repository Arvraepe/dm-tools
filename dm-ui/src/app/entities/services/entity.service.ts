import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class EntityService {

    private _currentType = new BehaviorSubject(null);
    private _entity = new BehaviorSubject(null);
    private _meta = new BehaviorSubject(null);

    get currentType () { return this._currentType.asObservable(); }
    get meta () { return this._meta.asObservable(); }
    get entity () { return this._entity.asObservable(); }

    constructor(
        private http: HttpClient
    ) {

    }

    setEntityType (entity) {
        this._currentType.next(entity);
        this.info();
    }

    getBase () {
        return `${environment.api}/${this._currentType.getValue()}`;
    }

    getAll () {
        return this.http.get(`${this.getBase()}`).toPromise();
    }

    get (id) {
        return this.http.get(`${this.getBase()}/${id}`).toPromise()
            .then((entity) => this._entity.next(entity));

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
