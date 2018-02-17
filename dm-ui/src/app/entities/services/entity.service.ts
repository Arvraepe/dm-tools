import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

@Injectable()
export class EntityService {

    constructor(
        private http: HttpClient
    ) {

    }

    getBase (entity) {
        return `${environment.api}/${entity}`;
    }

    getAll (entity) {
        return this.http.get(`${this.getBase(entity)}`).toPromise();
    }

    getByName (entity, name) {
        return this.http.get(`${this.getBase(entity)}/by/name?value=${name}`).toPromise();
    }

    get (entity, id) {
        return this.http.get(`${this.getBase(entity)}/${id}`).toPromise();

    }

    search (entity, query) {
        return this.http.get(`${this.getBase(entity)}?q=${query}`).toPromise();
    }

    find (entity, where) {
        return this.http.post(`${this.getBase(entity)}`, where).toPromise();
    }

    info (entity) {
        return this.http.get(`${this.getBase(entity)}/meta`).toPromise();
    }

    update (entity, body) {
        return this.http.put(`${this.getBase(entity)}/${body._id}`, body).toPromise();
    }

    filter (filter) {
        return this.http.post(`${this.getBase(filter.entity)}/search`, JSON.parse(filter.when)).toPromise();
    }
}
