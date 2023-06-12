import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared-ui';
import { UiComponent } from '../ui/ui.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: 'signup',
        loadChildren: () =>
          import('../../views/auth/signup/signup.module').then(
            (mod) => mod.SignupModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../../views/auth/login/login.module').then(
            (mod) => mod.LoginModule
          ),
      },
      {
        path: 'home',
        // loadChildren: "app/views/ui/home/home.module#HomeModule"
        loadChildren: () =>
          import('../../views/ui/home/home.module').then(
            (mod) => mod.HomeModule
          ),
      },
      {
        path: 'forgotpassword',
        loadChildren: () =>
          import(
            '../../views/auth/forgot-password/forgot-password.module'
          ).then((mod) => mod.ForgotPasswordModule),
      },
      {
        path:'contact-us',
        loadChildren:() =>
        import('../../views/ui/contact-us/contact-us.module').then((mod)=>mod.ContactUsModule)
      },
      {
        path: 'user/order',
        loadChildren: () =>
          import('../../views/ui/user-order/user-order.module').then(
            (mod) => mod.UserOrderModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'recoverpassword/:userId/:token',
        loadChildren: () =>
          import(
            '../../views/auth/recover-password/recover-password.module'
          ).then((mod) => mod.RecoverPasswordModule),
      },

      {
        path: 'test-razor-payment',
        loadChildren: () =>
          import(
            '../../views/ui/test-razor-payment/test-razor-payment.module'
          ).then((mod) => mod.TestRazorPaymentModule),
      },
      {
        path: ':artistType',
        loadChildren: () =>
          import('../../views/ui/artist-list/artist-list.module').then(
            (mod) => mod.ArtistListModule
          ),
      },
      {
        path: ':artistType/:artistName',
        loadChildren: () =>
          import('../../views/ui/booking-artist/booking-artist.module').then(
            (mod) => mod.BookingArtistModule
          ),
      },

      // { path: '**', redirectTo: 'error-404', pathMatch: "full" }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
export const routing = RouterModule.forRoot(routes);
