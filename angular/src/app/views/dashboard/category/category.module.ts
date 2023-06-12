import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared-ui';
import { DashboardLayoutModule } from '../../../layouts/dashboard-layout/dashboard-layout.module';
import { ModalModule } from 'ngx-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { RemoveWhitespaceDirective } from '../../../shared-ui/';

@NgModule({
  declarations: [
    CategoryComponent,
    RemoveWhitespaceDirective
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    DashboardLayoutModule,
    FormsModule,
    SharedUiModule,
    ModalModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class CategoryModule { }
