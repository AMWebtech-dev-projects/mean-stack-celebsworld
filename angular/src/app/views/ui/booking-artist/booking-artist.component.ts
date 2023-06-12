import { MetaServicesService } from './../../../shared-ui/services/meta-services.service';
import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {
  ArtistService,
  GlobalService,
  JwtService,
  WindowRef,
  BookingService,
} from '../../../shared-ui';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CurrentUser } from '../../../layouts/ui/user.model';
import { BookingDetails } from './booking.model';
import { environment } from '../../../../environments/environment';
// dummy card number : 4111 1111 1111 1111
// Expiry date: 0524 (MMYY)
// CSC/CVV: 100
// declare let Razorpay: any;
@Component({
  selector: 'app-booking-artist',
  templateUrl: './booking-artist.component.html',
  styleUrls: ['./booking-artist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BookingArtistComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  currentUser: CurrentUser = new CurrentUser();
  bookingDetails: BookingDetails = new BookingDetails();
  currentArtistData: any = [];
  gstTax: number = environment.gstTax;
  currentDiv: string = environment.eventType.videoMsg;
  activeNav: string = environment.eventType.videoMsg;
  pageTitle: string = '';
  // isCollapsed: boolean = true;
  rzp1: any;
  RAZORPAY_OPTIONS: any = {
    key: 'rzp_test_Cl5FzNaTJyToxF',
    amount: '',
    name: 'Novopay',
    order_id: '',
    description: 'Load Wallet',
    image:
      'https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg',
    handler: (res) => {},
    prefill: {
      name: '',
      email: '',
      contact: '',
      method: '',
    },
    modal: {},
    theme: {
      color: '#0096C5',
    },
  };
  response;
  razorpayResponse;
  required: any = {
    message: '',
  };
  myCarouselImages = [
    '../assets/images/image1.jpg',
    '../assets/images/image2.jpeg',
    '../assets/images/image3.jpg',
    '../assets/images/image1.jpg',
    '../assets/images/image2.jpeg',
    '../assets/images/image3.jpg',
  ];

  myCarouselOptions: any = {
    items: 3,
    dots: true,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      500: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  };
  baseUrl = environment.baseUrl;
  metaData:any ={};
  metaDataUrl:string;
  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private artistService: ArtistService,
    private router: Router,
    private jwtService: JwtService,
    private winRef: WindowRef,
    private bookingService: BookingService,
    private canonicalService: CanonicalService,
    private metaServicesService: MetaServicesService,
    private title: Title
  ) {
    this.currentUser = this.jwtService.getCurrentUser();
    this.datePickerConfig = Object.assign({
      containerClass: 'theme-dark-blue',
      isAnimated: true,
      dateInputFormat: 'DD-MM-YYYY',
      showWeekNumbers: false,
      showPreviousMonth: false,
      minDate: new Date(),
      adaptivePosition: true,
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      if (!this.currentUser) {
        this.globalService.bookingUrlState =
        '/' + res.artistType + '/' + res.artistName;
        this.metaDataUrl = res.artistType + '/' + res.artistName
        this.canonicalService.setCanonicalURL(this.metaDataUrl);
      } else {
        this.globalService.bookingUrlState = null;
      }
      this.bookingDetails.artistType = res.artistType;
      this.bookingDetails.artistId = res.artistName.split('-').pop();
      // this.globalService.topscroll();
      this.getArtist();
    });
    this.RAZORPAY_OPTIONS = {
      prefill: {
        name: '',
        email: '',
        contact: '',
        method: '',
      },
    };
  }
  showDiv(currentDivShow: string) {
    this.currentDiv = currentDivShow;
    this.activeNav = currentDivShow;
    this.bookingDetails.message = '';
  }

  getArtist() {
    this.artistService.getArtistList({
      _id: this.bookingDetails.artistId,
      artistType: this.bookingDetails.artistType,
    }).subscribe(
      (data) => {
        if (data.status === 200 && data.data) {
          const prepareData = data.data;
          if (!prepareData.publicVideo.length) {
            delete prepareData.publicVideo;
          }
          prepareData.gstTax = (prepareData.artistPrice * this.gstTax) / 100;
          prepareData.totalAmount =
          prepareData.artistPrice + prepareData.gstTax;
          prepareData.gstTax = prepareData.gstTax.toFixed(2);
          prepareData.totalAmount = prepareData.totalAmount.toFixed(2);
          this.currentArtistData = prepareData;
          this.pageTitle = prepareData.name;
          const pageTitle = this.pageTitle.substr(0,1).toUpperCase();
            this.pageTitle = pageTitle + this.pageTitle.substr(1);
          // this.globalService.setPageTitle(this.pageTitle);
          this.title.setTitle(this.pageTitle + ' | Celebs Worldwide');

          this.metaData = {
            title : this.currentArtistData.name,
            description: 'Book personal acoustic message to share the feeling with the right tune as per the occasion from your favorite music',
            keywords: 'Angular, TypeScript',
            image:  this.currentArtistData.artistImage,
            url: this.baseUrl+this.metaDataUrl
          }
          this.metaServicesService.setPageMeta(this.metaData);
          this.spinner.hide();
        } else {
          this.spinner.hide();
          this.router.navigate(['error-404']);
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  razorPayCreateOrder(amount) {
    // this.spinner.show();
    const self = this;
    this.bookingDetails.amount = amount;
    let ObjectKeys = Object.keys(this.required);

    if (this.bookingDetails.someoneElse) {
      ObjectKeys = ObjectKeys.concat(['to', 'from']);
    }

    const found = ObjectKeys.filter(function (obj) {
      return !self.bookingDetails[obj];
    });
    if (found.length) {
      this.toastr.error('* Please fill all mandatory fields.', 'Error');
      return false;
    }
    this.spinner.show();
    this.bookingService.razorPayCreateOrder(this.bookingDetails).subscribe(
      (res) => {
        if (res.status === 200) {
          this.RAZORPAY_OPTIONS.key = res.key;
          this.RAZORPAY_OPTIONS.amount = res.order.amount;
          this.RAZORPAY_OPTIONS.name = this.currentUser.firstName;
          this.RAZORPAY_OPTIONS.order_id = res.order.id;
          this.RAZORPAY_OPTIONS.prefill.name = this.currentUser.firstName;
          this.RAZORPAY_OPTIONS.prefill.email = this.currentUser.email;
          this.RAZORPAY_OPTIONS.prefill.contact = this.currentUser.phoneNumber;
          this.RAZORPAY_OPTIONS.handler =
            this.razorPaySuccessHandler.bind(this);
          this.rzp1 = new this.winRef.nativeWindow.Razorpay(
            this.RAZORPAY_OPTIONS
          );
          this.spinner.hide();
          this.rzp1.open();
          // this.spinner.hide();
        } else {
          this.toastr.error(
            'There are some server Please check connection.',
            'Error'
          );
          this.spinner.hide();
        }
      }
    );
  }

  public razorPaySuccessHandler(response) {
    if (response && response.razorpay_payment_id) {
      this.spinner.show();
      const postData = Object.assign({}, this.bookingDetails);
      postData.userId = this.currentUser._id;
      postData.razorpayOrderId = response.razorpay_order_id;
      postData.razorpayPaymentId = response.razorpay_payment_id;
      this.saveBookingData(postData);
    } else {
      this.toastr.error('Payment Failed');
    }
  }

  saveBookingData(postData: any) {
    // return
    postData.artistInfo = this.currentArtistData;
    this.bookingService.razorPayOrdayPayment(postData).subscribe((data) => {
      if (data.status === 200) {
        // this.globalService.topscroll();
        this.toastr.success('Payment has been done Successfully');
        // this.spinner.hide();
        if (this.currentUser.role === environment.userType.admin) {
          this.router.navigate(['/orders']);
        } else {
          this.router.navigate(['/user/order']);
        }
      } else {
        this.spinner.hide();
        this.toastr.error('Payment Failed');
      }
    });
  }

  bookNow() {
    if (!this.currentUser) {
      // this.globalService.bookingUrlState =
      this.router.navigate(['/login']);
    }
  }
}
