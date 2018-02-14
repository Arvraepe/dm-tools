import {Component, Input, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../../dynamic-entity.component";

@Component({
    selector: 'dm-filter-editor',
    template: `
       <div class="box" *ngIf="data">

            <section class="hero is-light">
              <div class="hero-body">
                <div class="container full-width">
                  <h1 class="title">
                    <label for="i-name">Name</label>
                    <input id="i-name" class="input" [(ngModel)]="data.name" />
                  </h1>
                </div>
              </div>
            </section>

            <div class="block">
                <p class="block">
                    <label for="i-entity">Entity</label>
                    <input id="i-entity" class="input" [(ngModel)]="data.entity" />
                </p>
                <p class="block" >
                    <label for="i-where">Where</label>
                    <textarea style="height: 150px;" id="i-where" class="input" [(ngModel)]="data.where"></textarea>
                </p>
            </div>

        </div>
    `,
    styleUrls: ['./filter-editor.scss']
})
export class FilterEditorComponent implements DynamicEntityComponent{

    @Output() public data;

    constructor (

    ) {

    }

}
