import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictComponent } from './components';

export const routes: Routes = [
  {
    path: 'sobre-nos',
    loadChildren: () => import('./components/routes/about-us/about-us.module').then(m => m.AboutRouteModule)
  },
  {
    path: 'tour',
    loadChildren: () => import('./components/routes/tour').then(m => m.TourRouteModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./components/routes/contact').then(m => m.ContactRouteModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./components/routes/recursos').then(m => m.RecursosRouteModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: RestrictComponent
  },
  { path: '**', redirectTo: '' }
];

const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: !isIframe ? 'enabledBlocking' : 'disabled', // Don't perform initial navigation in iframes
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
