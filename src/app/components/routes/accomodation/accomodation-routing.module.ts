import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation.component';

const routes: Routes = [
    {
        path: '',
        component: AccomodationComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccomodationRoutingModule { }
