import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    DataTablesModule
  ]
})
export class UsersListModule { }
