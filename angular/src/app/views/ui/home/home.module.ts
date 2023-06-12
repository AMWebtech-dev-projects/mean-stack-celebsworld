import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../../../shared-ui/';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedUiModule,
    HomeRoutingModule,
    CarouselModule,
    // AnalyticsRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [Title],
  bootstrap: [HomeComponent]
  // providers: [AnalyticsService]
})
export class HomeModule {
}
