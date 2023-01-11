import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { HeaderModule } from '../../header';
import { FooterModule } from '../../footer';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContactRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ContactRouteModule { }
