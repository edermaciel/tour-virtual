import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrecosComponent } from './precos.component';
import { PrecosRoutingModule } from './precos-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';

@NgModule({
  declarations: [
    PrecosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrecosRoutingModule,
    HeaderModule,
    FooterModule,
    StickyWppModule
  ]
})
export class PrecosRouteModule { }
