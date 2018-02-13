import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <div class="site-container" [ngClass]="{ 'black-background': hasBlackBackground() }">
            <dm-header *ngIf="hasHeader()"></dm-header>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {

    public path;

    constructor (
        private location:Location,
        private router:Router
    ) {
        this.router.events.subscribe(() => this.path = location.path());
    }

    hasHeader () {
        return this.path !== '/login';
    }

    hasBlackBackground () {
        return this.path === '/login';
    }

    hasPadding () {
        return this.path !== '/login';
    }

}
