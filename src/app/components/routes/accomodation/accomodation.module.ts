import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccomodationComponent } from './accomodation.component';
import { AccomodationRoutingModule } from './accomodation-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';

@NgModule({
  declarations: [
    AccomodationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccomodationRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AccomodationRouteModule { }
