import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccomodationComponent } from './accomodation.component';
import { AccomodationRoutingModule } from './accomodation-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    AccomodationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccomodationRoutingModule,
    HeaderModule,
    FooterModule,
    StickyWppModule,
    SwiperModule
  ]
})
export class AccomodationRouteModule { }
