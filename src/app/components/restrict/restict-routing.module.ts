import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictComponent } from './restrict.component';

export const routes: Routes = [
    {
        path: '',
        component: RestrictComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestrictRoutingModule { }
