import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListRoutingModule } from './order-list-routing.module';
import { OrderListComponent } from './order-list.component';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { SharedUiModule } from '../../../shared-ui';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderListRoutingModule,
    DataTablesModule,
    ModalModule,
    SharedUiModule,
    TabsModule.forRoot()
  ]
})
export class OrderListModule { }
