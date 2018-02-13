import {Component} from '@angular/core';

@Component({
    selector: 'dm-login',
    template: `
        <div class="login-box-container">
            <div class="login-box">
                <h1 class="title">Login</h1>
                <form>
                    <div class="field">
                        <label class="label" for="i-username">Username</label>
                        <div class="control">
                            <input id="i-username" class="input" type="text" placeholder="Username">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="i-password">Password</label>
                        <div class="control">
                            <input id="i-password" class="input" type="password" placeholder="Password">
                        </div>
                    </div>
                </form>
                <div style="margin-top: 12px; text-align: right;">
                    <span class="button">Login</span>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./login.scss']
})
export class LoginComponent {

}
