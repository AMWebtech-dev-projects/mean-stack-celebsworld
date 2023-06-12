import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { GlobalService, UsersService } from '../../../shared-ui';


@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  userList: any = [];
  constructor(
    private globalService: GlobalService,
    private spinner: NgxSpinnerService,
    private usersService: UsersService,
  ) {

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
          targets: 2,
          orderable: false,
        },
      ]
    };
    this.getUserList();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  getUserList() {
    this.spinner.show();
    this.usersService.getUsersList().subscribe(
      (data) => {
        if (data.status === 200) {
          this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
            this.userList = data.data;
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

}
