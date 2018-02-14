import {Component, ViewChild, ComponentFactoryResolver, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntityService} from "../../services/entity.service";
import {DynamicEntityComponent} from "./dynamic-entity.component";
import {DynamicEntityDirective} from "./dynamic-entity.directive";
import {EntityComponentMappings} from "../../mappings/entities.mappings";

@Component({
    selector: 'dm-entity',
    template: `

        <div *ngIf="meta && (getGlobalEntityActions(meta).length > 0 || getDetailEntityActions(meta).length > 0)" class="flexed" style="margin-bottom: 12px;">
            <span [ngClass]="{ 'margin-right-xs': !last }" class="button button-light" *ngFor="let action of getGlobalEntityActions(meta); let last = last;" (click)="doAction(action)"><i *ngIf="action.icon" class="fa" style="margin-right: 8px;" [ngClass]="action.icon"> </i> {{ action.label }}</span>
            <dm-horizontal-divider></dm-horizontal-divider>
            <span [ngClass]="{ 'margin-right-xs': !last }" style="margin-right: 8px;" class="button button-light" *ngFor="let action of getDetailEntityActions(meta); let last = last;" (click)="doAction(action)"><i *ngIf="action.icon" class="fa" style="margin-right: 8px;" [ngClass]="action.icon"> </i> {{ action.label }}</span>
        </div>

       <ng-template dm-entity-host></ng-template>

       <div class="block" style="text-align: right;" *ngIf="viewType === 'editor'">
            <span class="button is-success" [ngClass]="{ 'is-loading': saving }" (click)="save()">Save</span>
        </div>
    `,
    styleUrls: ['./entity.scss']
})
export class EntityComponent implements OnInit{

    private meta;
    private entity;
    private entityType;
    private viewType;

    private saving;

    @ViewChild(DynamicEntityDirective) dmEntityHost:DynamicEntityDirective;

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private entityService:EntityService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {

    }

    ngOnInit () {

        this.route.params.subscribe((params) => {

            // Set the current entity type in the entity service
            this.entityType = params.entity;
            this.viewType = params.view || 'view';

            this.entityService.info(this.entityType)
                .then((meta) => this.meta = meta)
                .then(() => this.entityService.get(this.entityType, params.id))
                .then((entity) => {
                    this.entity = entity;
                    this.loadComponent(this.meta, this.entity, this.viewType);
                });

        });
    }

    loadComponent (meta, entity, view) {

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EntityComponentMappings[meta.resource].views[view]);

        const viewContainerRef = this.dmEntityHost.viewContainerRef;
        viewContainerRef.clear();

        this.dmEntityHostComponent = viewContainerRef.createComponent(componentFactory);
        (<DynamicEntityComponent>this.dmEntityHostComponent.instance).data = entity;
    }

    getGlobalEntityActions (meta) {
        return EntityComponentMappings[meta.resource].actions.filter((action) => action.global);
    }

    getDetailEntityActions (meta) {
        return EntityComponentMappings[meta.resource].actions.filter((action) => !action.global);
    }

    doAction (action) {
        action.perform(this.entityType, this.entity, this.router);
    }

    save () {
        this.saving = true;
        this.entityService.update(this.entityType, this.entity)
            .then(() => this.saving = false)
            .catch(() => this.saving = false);
    }

}
