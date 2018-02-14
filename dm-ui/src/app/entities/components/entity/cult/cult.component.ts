import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../dynamic-entity.component";

@Component({
    selector: 'dm-cult',
    template: `
       <h1 class="title" *ngIf="data">{{ data.name }}</h1>
    `,
    styleUrls: ['./cult.scss']
})
export class CultComponent implements DynamicEntityComponent{

    @Input() public data;

    constructor (

    ) {

    }

}
