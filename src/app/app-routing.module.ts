import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictComponent } from './components';

export const routes: Routes = [
  {
    path: 'sobre-nos',
    loadChildren: () => import('./components/routes/about-us/about-us.module').then(m => m.AboutRouteModule)
  },
  {
    path: 'acomodacao',
    loadChildren: () => import('./components/routes/accomodation').then(m => m.AccomodationRouteModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./components/routes/contact').then(m => m.ContactRouteModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./components/routes/localization').then(m => m.LocalizationRouteModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./components/routes/reservation').then(m => m.ReservationRouteModule)
  },
  {
    path: 'passeios',
    loadChildren: () => import('./components/routes/tours').then(m => m.ToursModule)
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
