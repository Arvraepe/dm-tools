import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntityService} from "../../services/entity.service";
import * as R from 'ramda';
import {EntityComponentMappings} from "../../mappings/entities.mappings";

@Component({
    selector: 'dm-entities',
    template: `
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
                    <tr *ngFor="let entity of entities" class="clickable" (click)="goto(entity._id)">
                        <td *ngFor="let column of getEntityColumns(meta)">{{ getProperty(entity, column.path) }}</td>
                    </tr>
                </table>
            </div>
        </div>
    `,
    styleUrls: ['./entities.scss']
})
export class EntitiesComponent {

    private meta;
    private entities;
    private query;
    private isSimpleSearch = true;

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private entityService:EntityService
    ) {

        this.route.params.subscribe((params) => {

            // Set the current entity type in the entity service
            this.entityService.setEntityType(params.entity);
            this.entityService.getAll().then((entities) => this.entities = entities);

        });

        this.entityService.meta.subscribe((meta) => this.meta = meta);

    }

    goto (id) {
        this.router.navigateByUrl(`/entities/${this.meta.resource}/${id}`);
    }

    getProperty (entity, path) {
        return R.view(R.lensPath(path), entity);
    }

    getEntityColumns (meta) {
        return EntityComponentMappings[this.meta.resource].columns;
    }

    filter (query) {
        if (this.isSimpleSearch) this.entityService.getByName(query).then((results) => this.entities = results);
        else this.entityService.search(query).then((results) => this.entities = results);
    }

}
