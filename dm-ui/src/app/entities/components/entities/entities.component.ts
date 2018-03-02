import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntityService} from "../../services/entity.service";
import * as R from 'ramda';
import {EntityComponentMappings} from "../../mappings/entities.mappings";

@Component({
    selector: 'dm-entities',
    template: `
        <div *ngIf="meta && getGlobalEntityActions(meta).length > 0" style="margin-bottom: 12px;">
            <span class="button button-light" *ngFor="let action of getGlobalEntityActions(meta)"><i *ngIf="action.icon" class="fa" style="margin-right: 8px;" [ngClass]="action.icon"> </i> {{ action.label }}</span>
        </div>

        <div class="box" *ngIf="meta">
            <section *ngIf="meta" class="hero is-light">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    List of {{ meta.resource }}
                  </h1>
                </div>
              </div>
            </section>

            <div style="margin-top: 12px;">
                <input class="input" type="text" placeholder="Search {{ meta.resource }}" [(ngModel)]="query" (keyup)="filter(query)" />
                <!--<label class="checkbox"><input [(ngModel)]="isSimpleSearch" type="checkbox"> Name only</label>-->
            </div>

            <div class="table-container">
                <table class="table">
                    <thead>
                        <th *ngFor="let column of getEntityColumns(meta)">{{ column.label }}</th>
                    </thead>
                    <tr *ngFor="let entity of paginatedEntities" class="clickable is-hoverable" (click)="goto(entity._id)">
                        <td *ngFor="let column of getEntityColumns(meta)">{{ getProperty(entity, column.path) }}</td>
                    </tr>
                </table>
            </div>
            
            <div>
                <nav class="pagination" role="navigation" aria-label="pagination">
                    <a class="pagination-previous" (click)="previous()">Previous</a>
                    <a class="pagination-next" (click)="next()">Next page</a>
                    <ul class="pagination-list">
                        <li *ngFor="let page of getAmountOfPages()">
                            <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">{{ page }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    `,
    styleUrls: ['./entities.scss']
})
export class EntitiesComponent {

    private entityType;
    private meta;
    private entities;
    private query;
    private isSimpleSearch = true;
    private paginatedEntities = [];
    private amount = 20;
    private offset = 0;

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private entityService:EntityService
    ) {

        this.route.params.subscribe((params) => {

            this.entityType = params.entity;

            this.entityService.info(this.entityType).then((meta) => this.meta = meta);
            this.entityService.getAll(this.entityType).then((entities) => {
                this.entities = entities;
                this.offset = 0;
                this.paginate();
            });

        });

    }

    paginate () {
        this.paginatedEntities = this.entities.slice(this.offset, this.offset + this.amount);
    }

    getAmountOfPages () {
        return Math.ceil(this.entities / this.amount);
    }

    getCurrentPage () {

    }

    next () {

    }

    previous () {

    }

    goto (id) {
        this.router.navigateByUrl(`/entities/${this.meta.resource}/${id}`);
    }

    getProperty (entity, path) {
        return R.view(R.lensPath(path), entity);
    }

    getEntityColumns (meta) {
        return EntityComponentMappings[meta.resource].columns;
    }

    getGlobalEntityActions (meta) {
        return EntityComponentMappings[meta.resource].actions.filter((action) => action.global);
    }

    filter (query) {
        if (this.isSimpleSearch) this.entityService.getByName(this.entityType, query).then((results) => this.entities = results);
        else this.entityService.search(this.entityType, query).then((results) => this.entities = results);
    }

}
