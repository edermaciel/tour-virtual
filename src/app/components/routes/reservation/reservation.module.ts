import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReservationComponent } from './reservation.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';

@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReservationRoutingModule,
    HeaderModule,
    FooterModule,
    StickyWppModule
  ]
})
export class ReservationRouteModule { }
