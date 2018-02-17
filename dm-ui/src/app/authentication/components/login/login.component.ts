import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'dm-login',
    template: `
        <div class="login-box-container">
            <div class="login-box">
                <h1 class="title">Login</h1>
                <div class="field">
                    <label class="label" for="i-username">Username</label>
                    <div class="control">
                        <input id="i-username" [(ngModel)]="username" class="input" type="text" placeholder="Username">
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="i-password">Password</label>
                    <div class="control">
                        <input id="i-password" [(ngModel)]="password" class="input" type="password" placeholder="Password">
                    </div>
                </div>
                <article style="margin-top: 12px;" *ngIf="errored" class="message is-danger">
                    <div class="message-header">
                        <p>Unauthorized</p>
                        <button class="delete" aria-label="delete" (click)="errored = false"></button>
                    </div>
                    <div class="message-body">
                        The username password combination was incorrect.
                    </div>
                </article>
                <div style="margin-top: 12px; text-align: right;">
                    <span class="button" (click)="login()">Login</span>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./login.scss']
})
export class LoginComponent {

    private username;
    private password;

    private errored = false;

    constructor (
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    login () {

        this.errored = false;

        console.log(this.username, this.password);

        this.authenticationService.authenticate(this.username, this.password)
            .then(() => this.router.navigateByUrl('/entities/spells'))
            .catch((err) => this.errored = true );

    }
}
