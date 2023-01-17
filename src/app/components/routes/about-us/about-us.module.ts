import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';
import { StickyWppModule } from 'src/app/shared/sticky-wpp';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule,
    HeaderModule,
    FooterModule,
    StickyWppModule
  ]
})
export class AboutRouteModule { }
