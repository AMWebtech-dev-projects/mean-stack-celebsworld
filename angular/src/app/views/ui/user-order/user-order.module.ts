import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserOrderRoutingModule } from './user-order-routing.module';
import { UserOrderComponent } from './user-order.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedUiModule } from '../../../shared-ui';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    UserOrderComponent
  ],
  imports: [
    CommonModule,
    UserOrderRoutingModule,
    FormsModule,
    SharedUiModule,
    HttpClientModule,
    DataTablesModule,
    ModalModule
  ]
})
export class UserOrderModule { }
