import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntityService} from "../../services/entity.service";

@Component({
    selector: 'dm-entity',
    template: `
       <h1 *ngIf="entity">{{ entity.name }}</h1>
    `,
    styleUrls: ['./entity.scss']
})
export class EntityComponent {

    private entity;

    constructor (
        private route: ActivatedRoute,
        private entityService:EntityService
    ) {

        this.route.params.subscribe((params) => this.entityService.setEntityType(params.entity));

        this.entityService.meta.subscribe((meta) => this.entity = meta);

    }

}
