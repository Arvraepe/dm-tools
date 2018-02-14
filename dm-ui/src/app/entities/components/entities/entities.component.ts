import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntityService} from "../../services/entity.service";
import * as R from 'ramda';
import {EntityComponentMappings} from "../../mappings/entities.mappings";

@Component({
    selector: 'dm-entities',
    template: `
        <div class="box">
            <section *ngIf="meta" class="hero is-light">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    List of {{ meta.resource }}
                  </h1>
                </div>
              </div>
            </section>

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
    private selected;

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

}
