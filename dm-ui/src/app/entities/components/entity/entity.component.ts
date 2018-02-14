import {Component, ViewChild, ComponentFactoryResolver, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntityService} from "../../services/entity.service";
import {DynamicEntityComponent} from "./dynamic-entity.component";
import {DynamicEntityDirective} from "./dynamic-entity.directive";
import {EntityComponentMappings} from "../../mappings/entities.mappings";

@Component({
    selector: 'dm-entity',
    template: `

        <div *ngIf="meta && (getGlobalEntityActions(meta).length > 0 || getDetailEntityActions(meta).length > 0)" class="flexed" style="margin-bottom: 12px;">
            <span [ngClass]="{ 'margin-right-xs': !last }" class="button button-light" *ngFor="let action of getGlobalEntityActions(meta); let last = last;"><i *ngIf="action.icon" class="fa" style="margin-right: 8px;" [ngClass]="action.icon"> </i> {{ action.label }}</span>
            <dm-horizontal-divider></dm-horizontal-divider>
            <span [ngClass]="{ 'margin-right-xs': !last }" style="margin-right: 8px;" class="button button-light" *ngFor="let action of getDetailEntityActions(meta); let last = last;"><i *ngIf="action.icon" class="fa" style="margin-right: 8px;" [ngClass]="action.icon"> </i> {{ action.label }}</span>
        </div>

       <ng-template dm-entity-host></ng-template>
    `,
    styleUrls: ['./entity.scss']
})
export class EntityComponent implements OnInit{

    private meta;
    private entity;

    @ViewChild(DynamicEntityDirective) dmEntityHost:DynamicEntityDirective;

    constructor (
        private route: ActivatedRoute,
        private entityService:EntityService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {

        this.route.params.subscribe((params) => {

            // Set the current entity type in the entity service
            this.entityService.setEntityType(params.entity);

            // Get the current entity
            this.entityService.get(params.id);

        });

        this.entityService.meta.subscribe((meta) => this.meta = meta);

    }

    ngOnInit () {
        this.entityService.entity.subscribe((entity) => {

            this.entity = entity;

            // Get the dynamic component
            if (this.entity && this.meta) {

                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EntityComponentMappings[this.meta.resource].entity);

                const viewContainerRef = this.dmEntityHost.viewContainerRef;
                viewContainerRef.clear();

                const componentRef = viewContainerRef.createComponent(componentFactory);
                (<DynamicEntityComponent>componentRef.instance).data = this.entity;
            }

        });
    }

    getGlobalEntityActions (meta) {
        return EntityComponentMappings[meta.resource].actions.filter((action) => action.global);
    }

    getDetailEntityActions (meta) {
        return EntityComponentMappings[meta.resource].actions.filter((action) => !action.global);
    }

}
