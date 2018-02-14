import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntityService} from "../../services/entity.service";

@Component({
    selector: 'dm-entities',
    template: `
        <h1 class="title" *ngIf="entity">List of {{ meta.resource }}</h1>
        <div class="table-container">
            <table class="table">
                <thead>
                    <th>Name</th>
                </thead>
                <tr *ngFor="let entity of entities" class="clickable" (click)="goto(entity._id)">
                    <td>{{ entity.name }}</td>
                </tr>
            </table>
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

}
