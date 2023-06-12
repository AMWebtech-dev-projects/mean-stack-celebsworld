import {
  NgZone,
  ViewChild,
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ModalDirective } from 'ngx-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BookingService, GlobalService } from '../../../shared-ui';
import { BookingDetails } from '../../ui/booking-artist/booking.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderListComponent implements OnInit, AfterViewInit {
  bookingDetails: BookingDetails = new BookingDetails();
  @ViewChild('viewBookingModal', { static: false })
  public viewBookingModal: ModalDirective;
  @ViewChild('confirmRefundModal', { static: false })
  public confirmRefundModal: ModalDirective;
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  orderList: any = [];
  OrderDetails: any = '';
  orderStatus = Object.values(environment.orderStatus);
  public activeTab: any;
  uploadConfig: any = {
    orderStatus: '',
    uploadUrl: '',
  };

  @ViewChild('videoFileInput') videoFileInputVar: ElementRef;
  selectedVideo: any = {
    videoInfo: [],
    videoUrl: '',
  };
  currentDiv: string = 'userDetails';
  activeNav: string = 'userDetails';
  constructor(
    private globalService: GlobalService,
    private spinner: NgxSpinnerService,
    private bookingService: BookingService,
    private zone: NgZone,
    private toastr: ToastrService
  ) {
    // this.zone.runOutsideAngular(() => {
      // });
    setTimeout(() => {
      this.getRazorPayOrderList();
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      responsive: true,
      columnDefs: [
        {
          targets: 0,
          orderable: true,
        },
        {
          targets: 1,
          orderable: false,
        },
        {
          targets: 6,
          orderable: false,
        },
      ],
      // pagingType: 'full_numbers'
    };
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  showDiv(currentDivShow: string) {
    this.currentDiv = currentDivShow;
    this.activeNav = currentDivShow;
    // this.bookingDetails.message = "";
  }

  getRazorPayOrderList() {
    this.spinner.show();
    this.bookingService.getRazorPayOrderList().subscribe(
      (data) => {
        if (data.status === 200) {
          this.datatableElement.dtInstance.then(
            (dtInstance: DataTables.Api) => {
              dtInstance.destroy();
              this.dtTrigger.next();
              this.orderList = data.data;
              this.spinner.hide();
            }
          );
        } else {
          this.spinner.hide();
        }
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error(
          'There are some server error. Please check connection.',
          'Error'
        );
      }
    );
  }

  closeModel() {
    this.viewBookingModal.hide();
    this.selectedVideo = {
      VideoInfo: [],
      VideoUrl: '',
    };
    if (this.videoFileInputVar) {
      this.videoFileInputVar.nativeElement.value = '';
    }
  }

  viewUserDetails(order: any) {
    this.currentDiv = 'userDetails';
    this.activeNav = 'userDetails';

    this.OrderDetails = {};
    this.viewBookingModal.show();
    setTimeout(() => {
      this.OrderDetails = order;
      this.OrderDetails.oldVideo = order.uploadUrl ? order.uploadUrl : '';
      this.uploadConfig.orderStatus =
        order.orderStatus === 'pending' ? '' : order.orderStatus;
    });
  }

  refundAmout() {
    this.spinner.show();
    this.bookingService.razorPayRefundOrderPayment(this.OrderDetails).subscribe(
      (data) => {
        if (data.status === 200) {
          this.closeModel();
          this.confirmRefundModal.hide();
          this.getRazorPayOrderList();
          this.toastr.success('Amount Succeccefully Refunded.', 'success');
        } else {
          this.closeModel();
          this.confirmRefundModal.hide();
          this.spinner.hide();
        }
      },
      (error) => {
        this.closeModel();
        this.confirmRefundModal.hide();
        this.spinner.hide();
        this.toastr.error(
          'There are some server error. Please check connection.',
          'Error'
        );
      }
    );
  }

  uploadVideoPreview(event) {
    const fileData = event.target.files && event.target.files[0];
    const reader = new FileReader();
    if (fileData && fileData.size <= 25000000) {
      this.spinner.show();
      if (fileData.type.indexOf('video') > -1) {
        this.selectedVideo.videoInfo = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (readerEvent: any) => {
          this.selectedVideo.videoUrl = readerEvent.target.result;
          this.spinner.hide();
        };
      } else {
        this.spinner.hide();
        this.toastr.warning('You can upload only Video.', 'Warning');
        this.videoFileInputVar.nativeElement.value = '';
        return false;
      }
    } else {
      this.spinner.hide();
      this.videoFileInputVar.nativeElement.value = '';
      this.toastr.warning('Please upload less then 25MB', 'Warning');
    }
  }

  uploadVideo() {
    if (!this.uploadConfig.orderStatus) {
      this.toastr.error('* Please fill all mandatory fields.', 'Error');
      return false;
    } else if (
      this.selectedVideo.videoInfo &&
      !this.selectedVideo.videoInfo.name &&
      !this.OrderDetails.uploadUrl
    ) {
      this.toastr.error('* Please select Video.', 'Error');
      return false;
    }
    if (this.selectedVideo.videoInfo && this.selectedVideo.videoInfo.name) {
      this.spinner.show();
      // return;
      this.globalService
        .localUpload(
          this.selectedVideo.videoInfo,
          environment.uploadFolder.artistVideo
        )
        .subscribe(
          (data: any) => {
            if (data.status === 200) {
              if (this.OrderDetails.image) {
                this.OrderDetails.oldImage = this.OrderDetails.image;
              }
              this.OrderDetails.uploadUrl = data.imgPath;
              this.orderStatusAndUploadVideo();
            }
          },
          (error) => {
            this.closeModel();
            this.spinner.hide();
            this.toastr.error(
              'There are some server error. Please check connection.',
              'Error'
            );
          }
        );
    } else {
      this.orderStatusAndUploadVideo();
    }
  }

  orderStatusAndUploadVideo() {
    this.OrderDetails.orderStatus = this.uploadConfig.orderStatus;
    this.spinner.show();
    // return;
    this.bookingService.orderStatusAndUploadVideo(this.OrderDetails).subscribe(
      (data) => {
        this.spinner.hide();
        // this.viewBookingModal.hide();
        this.getRazorPayOrderList();
        this.closeModel();
        this.toastr.success('Video Uploaded Successefully', 'success');
      },
      (error) => {
        this.toastr.error(
          'There are some server error. Please check connection.',
          'Error'
        );
      }
    );
  }

  addOrderStatusClass(status: any, type) {
    if (type === 'class') {
      if (
        status === 'pending' ||
        status === 'Pending' ||
        status === 'draft' ||
        status === 'draft'
      ) {
        return 'text-warning';
      } else if (status === 'cancel' || status === 'Cancel') {
        return 'text-danger';
      } else {
        return 'text-success';
      }
    } else {
      if (
        status === 'pending' ||
        status === 'Pending' ||
        status === 'draft' ||
        status === 'draft'
      ) {
        return 'Pending';
      } else if (status === 'cancel' || status === 'Cancel') {
        return 'Cencel';
      } else {
        return 'Submitted';
      }
    }
  }
}
