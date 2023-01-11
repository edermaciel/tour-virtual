import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictComponent } from './restrict.component';
import { CarouselModule } from '../carousel';
import { ContactLayoutModule } from '../contact-layout';
import { FooterModule } from '../footer';
import { HeaderModule } from '../header';
import { TopicModule } from '../topic';

@NgModule({
  declarations: [
    RestrictComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ContactLayoutModule,
    FooterModule,
    HeaderModule,
    TopicModule
  ]
})
export class RestrictModule { }
