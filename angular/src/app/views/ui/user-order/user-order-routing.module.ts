import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOrderComponent } from './user-order.component';

const routes: Routes = [
  // tslint:disable-next-line: quotemark
  {path: '', component: UserOrderComponent, pathMatch: 'Full', data: {title: "User Order"}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserOrderRoutingModule { }
