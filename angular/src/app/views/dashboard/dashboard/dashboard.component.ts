import { ArtistService, BookingService, CategoryService, GlobalService, UsersService } from '../../../shared-ui/';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataInterface, emptyChartData } from './chart-data.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  dashboardInfo: any = {
    categoryList: [],
    artistList: [],
    userList: [],
    orderList: [],
  };

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private categoryService: CategoryService,
    private artistService: ArtistService,
    private UserService: UsersService,
    private bookingService: BookingService
  ) {
  }

  ngOnInit() {
    this.getArtistList();
    this.GetCategoryList();
    this.getUserList();
    this.getRazorPayOrderList();
  }

  GetCategoryList() {
    // this.spinner.show();
    this.categoryService.getCategoryList().subscribe((res) => {
      if (res.status === 200) {
        this.dashboardInfo.categoryList = res.data;
      } else {
        this.toastr.error('There is some error to getting Category List');
      }
    });
  }

  getArtistList() {
    this.artistService.getArtistList().subscribe((res) => {
      if (res.status === 200) {
        this.dashboardInfo.artistList = res.data;
      } else {
        this.toastr.error('There is some error to getting Artist List');
      }
    });
  }

  getUserList() {
    this.UserService.getUsersList().subscribe((res) => {
      if (res.status === 200) {
        this.dashboardInfo.userList = res.data;
      } else {
        this.toastr.error('There is some error to getting users List');
      }
    });
  }


  getRazorPayOrderList() {
    this.bookingService.getRazorPayOrderList().subscribe(
      (data) => {
        if (data.status === 200) {
            this.dashboardInfo.orderList = data.data;
            this.spinner.hide();
        } else {
          this.toastr.error('There is some error to getting Artist List');
        }
      },
    );
  }
}
