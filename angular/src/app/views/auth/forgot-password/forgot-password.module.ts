import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { UiModule } from '../../../layouts/ui/ui.module';
import { DashboardLayoutModule } from '../../../layouts/dashboard-layout/dashboard-layout.module';
import { FormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared-ui/';
import { ForgotPasswordComponent } from './forgot-password.component';


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    UiModule,
    DashboardLayoutModule,
    FormsModule,
    SharedUiModule
  ]
})
export class ForgotPasswordModule { }
