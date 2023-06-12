import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password.component';

const routes: Routes = [
  { path: '', component: RecoverPasswordComponent, data: { title: 'Recover Password', pathMatch: 'full' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverPasswordRoutingModule { }
