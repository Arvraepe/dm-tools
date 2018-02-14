import {Component} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'dm-header',
    template: `
       <div class="header">
            <div class="logo"><img src="../../../../assets/images/dm-tools-logo-white.png" /></div>

            <div [ngClass]="{ active: isActive('spells') }" (click)="goto('spells')" class="link clickable">Spells</div>
            <div [ngClass]="{ active: isActive('shops') }" (click)="goto('shops')" class="link clickable">Shops</div>
            <div [ngClass]="{ active: isActive('creatures') }" (click)="goto('creatures')" class="link clickable">Creatures</div>
            <div [ngClass]="{ active: isActive('cults') }" (click)="goto('cults')" class="link clickable">Cults</div>

       </div>
    `,
    styleUrls: ['./header.scss']
})
export class HeaderComponent {

    private url;

    constructor (
        private router: Router
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        });
    }

    isActive (part) {
        return this.url && this.url.indexOf(part) !== -1;
    }

    goto (part) {
        this.router.navigateByUrl(`/entities/${part}`);
    }

}
