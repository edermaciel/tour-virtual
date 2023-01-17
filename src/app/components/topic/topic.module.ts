import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicComponent } from './topic.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopicComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopicComponent]
})
export class TopicModule { }
