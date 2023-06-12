import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';
import { ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { AuthGuard, SharedUiModule } from '../../shared-ui/';
import { UiComponent } from '../ui/ui.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiRoutingModule,
    SharedUiModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule,
  ],
  declarations: [UiComponent],
  providers: [AuthGuard],
})
export class UiModule {}
