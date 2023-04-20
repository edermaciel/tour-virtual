import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecursosComponent } from './recursos.component';
import { RecursosRoutingModule } from './recursos-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';

@NgModule({
  declarations: [
    RecursosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecursosRoutingModule,
    HeaderModule,
    FooterModule,
    StickyWppModule
  ]
})
export class RecursosRouteModule { }
