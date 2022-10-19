import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictComponent } from './restrict.component';
import { NavbarModule } from '../navbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RestrictComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    NgbModule
  ]
})
export class RestrictModule { }
