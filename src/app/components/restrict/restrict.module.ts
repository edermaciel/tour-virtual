import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictComponent } from './restrict.component';
import { NavbarModule } from '../navbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from '../carousel';

@NgModule({
  declarations: [
    RestrictComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CarouselModule,
    NgbModule
  ]
})
export class RestrictModule { }
