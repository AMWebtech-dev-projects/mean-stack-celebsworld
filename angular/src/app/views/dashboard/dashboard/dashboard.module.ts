import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../../../shared-ui/';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    ChartsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule {
}
