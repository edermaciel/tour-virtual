import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursComponent } from './tours.component';
import { HeaderModule } from '../../header';
import { ToursRoutingModule } from './tours-routing.module';
import { FooterModule } from '../../footer';

@NgModule({
  declarations: [
    ToursComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ToursRoutingModule,
    FooterModule
  ]
})
export class ToursModule { }
