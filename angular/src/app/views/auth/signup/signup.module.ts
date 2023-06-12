import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared-ui/';
import { UiModule } from '../../../layouts/ui/ui.module';
import { SignupComponent } from './signup.component';
import { DashboardLayoutModule } from '../../../layouts/dashboard-layout/dashboard-layout.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    UiModule,
    DashboardLayoutModule,
    FormsModule,
    SharedUiModule
  ],
  declarations: [SignupComponent],
  providers: []
})
export class SignupModule { }
