import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { AuthGuard } from '../../shared-ui/';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../views/dashboard/dashboard/dashboard.module').then(
            (mod) => mod.DashboardModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../../views/dashboard/category/category.module').then(
            (mod) => mod.CategoryModule
          ),
      },
      {
        path: 'artists',
        loadChildren: () =>
          import('../../views/dashboard/artist/artist.module').then(
            (mod) => mod.ArtistModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../../views/dashboard/order-list/order-list.module').then(
            (mod) => mod.OrderListModule
          ),
      },
      {
        path: 'user-list',
        loadChildren: () =>
          import('../../views/dashboard/users-list/user-list.module').then(
            (mod) => mod.UsersListModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLayoutRoutingModule {}
