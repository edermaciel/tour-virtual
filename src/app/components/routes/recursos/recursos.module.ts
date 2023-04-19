import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecursosComponent } from './recursos.component';
import { RecursosRoutingModule } from './recursos-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';

@NgModule({
  declarations: [
    RecursosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecursosRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class RecursosRouteModule { }
