import {Component, Input} from '@angular/core';
import {DynamicEntityComponent} from "../../dynamic-entity.component";
import * as R from 'ramda';

@Component({
    selector: 'dm-table',
    template: `
        <div class="box">

            <section class="hero is-light">
              <div class="hero-body">
                <div class="container columns">
                    <div class="column is-12" >
                        <h1 class="title">
                            {{ data.name }}
                        </h1>
                        <h2 class="subtitle">
                            There are <strong>{{ getAmount() }}</strong> items in this list
                        </h2>
                    </div>
                </div>
              </div>
            </section>

            <div class="container columns" style="margin-top: 12px;">
                <div class="column is-2">
                    <input class="input" type="number" [(ngModel)]="amount" />
                </div>
                <div class="column is-2">
                    <span class="button is-danger" (click)="generate()">Generate</span>
                </div>
            </div>
            
            <div class="margin-left-xs">
                <ol>
                    <li *ngFor="let result of results">{{ result }}</li>
                </ol>        
            </div>
        </div>
    `,
    styleUrls: ['./table.scss']
})
export class TableComponent implements DynamicEntityComponent {

    @Input() public data;
    public results;
    public amount = 1;

    constructor (

    ) {

    }

    generate () {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        };

        this.results = R.range(0, this.amount).map(() => this.data.items[getRandomInt(0, this.data.items.length - 1)]);
    }

    getAmount (level) {
        return this.data.items.length;
    }

}
