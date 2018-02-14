import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../dynamic-entity.component";

@Component({
    selector: 'dm-filter',
    template: `
       <div class="box" *ngIf="data">

            <section class="hero is-light">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    {{ data.name }}
                  </h1>
                </div>
              </div>
            </section>

            <div class="block">
                <strong>Entity.</strong> {{ data.entity }} <br />
                <strong>Where.</strong> {{ data.where }}
            </div>
        </div>
    `,
    styleUrls: ['./filter.scss']
})
export class FilterComponent implements DynamicEntityComponent{

    @Input() public data;

    constructor (

    ) {

    }

}
