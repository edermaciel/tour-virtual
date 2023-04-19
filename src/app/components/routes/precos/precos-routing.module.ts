import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrecosComponent } from './precos.component';

const routes: Routes = [
    {
        path: '',
        component: PrecosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrecosRoutingModule { }
