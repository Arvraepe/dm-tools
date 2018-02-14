import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../../dynamic-entity.component";

@Component({
    selector: 'dm-cult',
    template: `
       <div class="box">

            <section class="hero is-light">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    {{ data.name }}
                  </h1>
                </div>
              </div>
            </section>

            <div style="margin-top: 12px;" *ngFor="let entry of data.text">
                <div *ngIf="!hasSubEntries(entry)">{{ entry }}</div>
                <div *ngIf="hasSubEntries(entry)">
                    <strong>{{ entry.title }}</strong><br />
                    <p style="margin-bottom: 12px;">{{ entry.text }}</p>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./cult.scss']
})
export class CultComponent implements DynamicEntityComponent{

    @Input() public data;

    constructor (

    ) {

    }

    hasSubEntries (entry) {
        return typeof entry === 'object';
    }

}
