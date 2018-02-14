import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from "./dashboard/components/dashboard/dashboard.component";
import {EntityComponent} from "./entities/components/entity/entity.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {EntitiesComponent} from "./entities/components/entities/entities.component";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'entities/:entity', component: EntitiesComponent},
    {path: 'entities/:entity/:id', component: EntityComponent},
    {path: 'entities/:entity/:id/:view', component: EntityComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}
