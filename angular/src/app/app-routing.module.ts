import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './layouts/ui/ui.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout';
import { AuthGuard } from './shared-ui/';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';

const routes: Routes = [
  // { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'ui',
    component: UiComponent,
    data: { title: 'Home' },
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    data: { title: 'Admin' },
    pathMatch: 'full',
  },
  {
    path: 'error-404',
    loadChildren: () =>
      import('./views/pagenotfound/pagenotfound.module').then(
        (mod) => mod.PagenotfoundModule
      ),
  },
  { path: '404', component: PagenotfoundComponent },
  // { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
