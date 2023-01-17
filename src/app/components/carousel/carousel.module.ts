import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [CarouselComponent]
})
export class CarouselModule { }
