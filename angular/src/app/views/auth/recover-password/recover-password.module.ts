import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordRoutingModule } from './recover-password-routing.module';
import { UiModule } from '../../../layouts/ui/ui.module';
import { FormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared-ui/';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';

@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    CommonModule,
    RecoverPasswordRoutingModule,
    UiModule,
    FormsModule,
    SharedUiModule,
  ],
})
export class RecoverPasswordModule {}
