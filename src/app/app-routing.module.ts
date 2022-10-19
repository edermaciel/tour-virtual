import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictComponent } from './components/restrict';

const routes: Routes = [
  {
    path: '',
    component: RestrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
