import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared-ui/';
import { UiModule } from '../../../layouts/ui/ui.module';
import { LoginComponent } from './login.component';
import { DashboardLayoutModule } from '../../../layouts/dashboard-layout/dashboard-layout.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    UiModule,
    DashboardLayoutModule,
    FormsModule,
    SharedUiModule,
  ],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
