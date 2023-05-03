import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictComponent } from './restrict.component';
import { CarouselModule } from '../carousel';
import { FooterModule } from '../footer';
import { HeaderModule } from '../header';
import { TopicModule } from '../topic';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';
@NgModule({
  declarations: [
    RestrictComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FooterModule,
    HeaderModule,
    TopicModule,
    StickyWppModule
  ]
})
export class RestrictModule { }
