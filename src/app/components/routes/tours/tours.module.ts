import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursComponent } from './tours.component';
import { HeaderModule } from '../../header';
import { ToursRoutingModule } from './tours-routing.module';
import { FooterModule } from '../../footer';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';

@NgModule({
  declarations: [
    ToursComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ToursRoutingModule,
    FooterModule,
    StickyWppModule
  ]
})
export class ToursModule { }
