import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const toJson = (response) => response.json();

@Injectable()
export class FileService {

    private _folder = new BehaviorSubject({});

    get folder () { return this._folder.asObservable(); }

    constructor(
        private http: HttpClient
    ) {

    }

    public getFolder (id) {}
}
