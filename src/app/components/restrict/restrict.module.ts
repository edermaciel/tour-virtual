import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictComponent } from './restrict.component';
import { CarouselModule } from '../carousel';
import { ContactModule } from '../contact';
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
    ContactModule,
    FooterModule,
    HeaderModule,
    TopicModule
  ]
})
export class RestrictModule { }
