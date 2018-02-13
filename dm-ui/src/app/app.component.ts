import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <dm-header></dm-header>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}
