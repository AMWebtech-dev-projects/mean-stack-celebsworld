import { Title } from '@angular/platform-browser';
import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../login/modals';
import { AlertService } from '../../../shared-ui/alert/alert.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService, GlobalService } from '../../../shared-ui/';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  loading: boolean;
  errorMessage: string;
  successMessage: string;
  userData: Login = {
    email: '',
  };

  constructor(
    private alertService: AlertService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private globalService: GlobalService,
    private usersService: UsersService,
    private canonicalService: CanonicalService,
    private title:Title
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Forgot Password | Celebs Worldwide');
    this.canonicalService.setCanonicalURL('forgotpassword');
  }

  forgotPassword() {
    this.loading = true;
    this.userData.email = this.userData.email.toLocaleLowerCase();
    this.usersService.forgotPassword(this.userData).subscribe(
      (data) => {
        if (data.status === 200) {
          this.toastr.success(
            'Please check your email, Reset password link has been sent.',
            'Success'
          );
          this.errorMessage = '';
          this.successMessage = data.message;
          this.userData = {
            email: '',
          };
          this.loading = false;
        } else {
          this.toastr.error(data.message, 'Error');
          this.successMessage = '';
          this.errorMessage = data.message;
          this.userData = {
            email: '',
          };
          this.loading = false;
        }
      },
      (error) => {
        this.toastr.error(
          'There are some server Please check connection.',
          'Error'
        );
      }
    );
  }
}
