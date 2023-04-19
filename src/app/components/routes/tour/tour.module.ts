import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TourComponent } from './tour.component';
import { TourRoutingModule } from './tour-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    TourComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TourRoutingModule,
    HeaderModule,
    FooterModule,
    StickyWppModule,
    SwiperModule
  ]
})
export class TourRouteModule { }
