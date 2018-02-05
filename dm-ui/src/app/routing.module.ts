import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FileListComponent} from "./files/components/file-list.component";

const routes: Routes = [
    {path: '', component: FileListComponent},
    {path: 'files/list', component: FileListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}
