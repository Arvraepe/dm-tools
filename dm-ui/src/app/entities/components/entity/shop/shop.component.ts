import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../dynamic-entity.component";

@Component({
    selector: 'dm-creature',
    template: `
       <h1 class="title" *ngIf="data">{{ data.name }}</h1>
    `,
    styleUrls: ['./shop.scss']
})
export class ShopComponent implements DynamicEntityComponent{

    @Input() public data;

    constructor (

    ) {

    }

}
