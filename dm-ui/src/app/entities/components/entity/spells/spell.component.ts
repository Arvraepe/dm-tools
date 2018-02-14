import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../dynamic-entity.component";

@Component({
    selector: 'dm-spell',
    template: `
       <h1 class="title" *ngIf="data">{{ data.name }}</h1>
    `,
    styleUrls: ['./spell.scss']
})
export class SpellComponent implements DynamicEntityComponent {

    @Input() public data;

    constructor (

    ) {

    }

}
