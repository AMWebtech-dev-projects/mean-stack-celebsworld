import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedUiModule, AuthGuard } from '../../shared-ui/';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

const APP_CONTAINERS = [DashboardLayoutComponent];
import {
  AppAsideModule,
  // AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

@NgModule({
  imports: [
    CommonModule,
    AppAsideModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    // AppBreadcrumbModule.forRoot(),
    DashboardLayoutRoutingModule,
    BsDropdownModule.forRoot(),
    SharedUiModule,
  ],
  declarations: [DashboardLayoutComponent, ...APP_CONTAINERS],
  providers: [AuthGuard],
})
export class DashboardLayoutModule {}
