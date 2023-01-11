import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocalizationComponent } from './localization.component';
import { LocalizationRoutingModule } from './localization-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';

@NgModule({
  declarations: [
    LocalizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LocalizationRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class LocalizationRouteModule { }
