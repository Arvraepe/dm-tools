import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from "./dashboard/components/dashboard/dashboard.component";
import {EntityComponent} from "./entities/components/entity/entity.component";
import {LoginComponent} from "./authentication/components/login/login.component";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'entities/:entity', component: EntityComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}
