import { CanonicalService } from './../../../../shared-ui/services/canonical.service';
import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import {
  GlobalService,
  BookingService,
  WindowRef,
} from '../../../../shared-ui';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// dummy card number : 4111 1111 1111 1111
// Expiry date: 0524 (MMYY)
// CSC/CVV: 100
// declare let Razorpay: any;
@Component({
  selector: 'app-test-razor-payment',
  templateUrl: './test-razor-payment.component.html',
  styleUrls: ['./test-razor-payment.component.scss'],
})
export class TestRazorPaymentComponent implements OnInit {
  userDetails: any = {
    fullName: '',
    email: '',
    amount: 2500,
  };
  rzp1: any;
  RAZORPAY_OPTIONS: any = {
    key: 'rzp_test_Cl5FzNaTJyToxF',
    amount: '',
    name: 'Novopay',
    order_id: '',
    description: 'Load Wallet',
    image:
      'https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg',
    handler: (res) => {
    },
    prefill: {
      name: 'Suraj Chouhan',
      email: 'suraj@test.com',
      contact: '7974163148',
      method: '',
    },
    modal: {},
    theme: {
      color: '#0096C5',
    },
  };
  response;
  razorpayResponse;
  showModal = false;
  title = 'Test Razor Payment';
  constructor(
    private globalService: GlobalService,
    private spinner: NgxSpinnerService,
    private bookingService: BookingService,
    private router: Router,
    private toastr: ToastrService,
    private winRef: WindowRef,
    private cd: ChangeDetectorRef,
    private metaTagService: Meta,
    private titleService: Title,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.canonicalService.setCanonicalURL();
    // this.metaTagService.addTags([
    //   { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
    //   { name: 'description', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
    //   { name: 'robots', content: 'index, follow' },
    //   { name: 'author', content: 'Celebs Worldwide' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    //   { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
    //   { charset: 'UTF-8' }
    // ]);

  }

  buyRazorPay() {
    this.spinner.show();
    this.bookingService.razorPayCreateOrder(this.userDetails).subscribe(
      (res) => {
        if (res.status === 200) {
          this.RAZORPAY_OPTIONS.key = res.key;
          this.RAZORPAY_OPTIONS.amount = res.order.amount;
          this.RAZORPAY_OPTIONS.name = this.userDetails.fullNmae;
          this.RAZORPAY_OPTIONS.order_id = this.userDetails.fullNmae;
          this.RAZORPAY_OPTIONS.order_id = res.order.id;
          this.RAZORPAY_OPTIONS.handler = this.razorPaySuccessHandler.bind(
            this
          );
          this.rzp1 = new this.winRef.nativeWindow.Razorpay(
            this.RAZORPAY_OPTIONS
          );
          this.rzp1.open();
          this.spinner.hide();
        }
      }
    );
  }

  public razorPaySuccessHandler(response) {
    this.razorpayResponse = `Razorpay Response`;
    this.showModal = true;
    this.cd.detectChanges();
    document.getElementById('razorpay-response').style.display = 'block';
  }

  makeid(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
