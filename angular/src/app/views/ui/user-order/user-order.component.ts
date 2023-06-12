import { Title } from '@angular/platform-browser';
import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { BookingService, GlobalService, JwtService } from '../../../shared-ui';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit, AfterViewInit {
  @ViewChild('orderDetailsModal', {static: false})
  public orderDetailsModal: ModalDirective;
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  orderList: any = [];
  currentUser: any;
  OrderDetails:any = '';

  constructor(
    private globalService: GlobalService,
    private jwtService: JwtService,
    private spinner: NgxSpinnerService,
    private bookingService: BookingService,
    private canonicalService: CanonicalService,
    private title: Title
  ) {
    this.currentUser = this.jwtService.getCurrentUser();
    this.getRazorPayOrderList();
  }

  ngOnInit(): void {
    this.title.setTitle('Order List | Celebs Worldwide');

    this.canonicalService.setCanonicalURL('user/order');
    this.dtOptions = {
      responsive: true,
      columnDefs: [
        {
          targets: 0,
          orderable: true,
          searchable: false,
        },
        {
          targets: 1,
          orderable: true,
        },
        {
          targets: 2,
          orderable: true,
        },

      ],
      // pagingType: 'full_numbers'
    };

  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  getRazorPayOrderList() {
    this.spinner.show();
    this.bookingService.getRazorPayOrderList().subscribe(
      (data) => {
        if (data.status === 200) {
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
          this.orderList = data.data;
          this.spinner.hide();
        });
      } else {
          this.spinner.hide();
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  addOrderStatusClass(status: any, type) {
    if (type === 'class') {
      if ((status === 'pending' || status === 'Pending') || (status === 'draft' || status === 'draft')) {
        return 'text-warning';
      } else if (status === 'cancel' || status === 'Cancel') {
        return 'text-danger';
      } else {
        return 'text-success';
      }
    } else {
      if ((status === 'pending' || status === 'Pending') || (status === 'draft' || status === 'draft')) {
        return 'Pending';
      } else if (status === 'cancel' || status === 'Cancel') {
        return 'Cencel';
      } else {
        return 'Delivered';
      }
    }

  }

  closeModel() {
    this.orderDetailsModal.hide();
  }

  orderDetails(order:any) {
    console.log('order======', order)
    this.OrderDetails = order;
    this.orderDetailsModal.show();
  }

}
