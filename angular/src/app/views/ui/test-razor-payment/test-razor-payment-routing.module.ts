import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRazorPaymentComponent } from './test-razor-payment/test-razor-payment.component';

const routes: Routes = [
  { path: '', component: TestRazorPaymentComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRazorPaymentRoutingModule {}
