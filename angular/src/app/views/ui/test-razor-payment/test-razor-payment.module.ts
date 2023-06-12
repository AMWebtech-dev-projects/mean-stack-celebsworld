import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutModule } from '../../../layouts/dashboard-layout/dashboard-layout.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
// import { RemoveWhitespaceDirective, NumberOnlyDirective } from "../../../shared-ui/";
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap';
import { SharedUiModule } from '../../../shared-ui/';
import { TestRazorPaymentRoutingModule } from './test-razor-payment-routing.module';
import { TestRazorPaymentComponent } from './test-razor-payment/test-razor-payment.component';
// import { ShareButtonsModule } from "ngx-sharebuttons/buttons";
// import { ShareIconsModule } from "ngx-sharebuttons/icons";
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [TestRazorPaymentComponent],
  imports: [
    CommonModule,
    TestRazorPaymentRoutingModule,
    DashboardLayoutModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    AngularEditorModule,
    NgxSliderModule,
    SharedUiModule,
    DataTablesModule,
    ModalModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
})
export class TestRazorPaymentModule {}
