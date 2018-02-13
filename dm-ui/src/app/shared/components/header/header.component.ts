import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'dm-header',
    template: `
       <div class="header">
            <div class="logo"><img src="../../../../assets/images/dm-tools-logo-white.png" /></div>

            <div class="link clickable">Spells</div>
            <div class="link clickable">Shops</div>
            <div class="link clickable">Creatures</div>
            <div class="horizontal-spacer"></div>
       </div>
    `,
    styleUrls: ['./header.scss']
})
export class HeaderComponent {

    constructor (

    ) {

    }

}
