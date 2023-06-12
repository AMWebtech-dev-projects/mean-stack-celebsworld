import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingArtistRoutingModule } from './booking-artist-routing.module';
import { BookingArtistComponent } from './booking-artist.component';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TestRazorPaymentRoutingModule } from '../test-razor-payment/test-razor-payment-routing.module';
import { SharedUiModule } from '../../../shared-ui';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [BookingArtistComponent],
  imports: [
    CommonModule,
    BookingArtistRoutingModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    CollapseModule,
    SharedUiModule,
    TestRazorPaymentRoutingModule,
    OwlModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
})
export class BookingArtistModule {}
