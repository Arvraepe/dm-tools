import {Component} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'dm-back',
    template: `
       <span class="back-btn fa fa-chevron-left clickable" (click)="back()"></span>
    `,
    styleUrls: ['./back.scss']
})
export class BackComponent {

    constructor () {}

    back () {
        window.history.back();
    }

}
