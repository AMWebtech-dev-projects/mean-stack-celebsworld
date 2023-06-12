import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService, UsersService } from '../../../shared-ui';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  userData = {
    password: '',
    confirmPassword: '',
  };
  successMessage: string;
  errorResponseMessage: string;
  recoverData: any;
  errorMessage =
    'Your New password and confirmation password do not match ! Please check your new passowrd. it should be same.';
  validPassword = true;
  userInfo: any = {};
  userId: any;
  link: any;
  expiredLinkErrorMsg: String = '';
  passwordEncrypt: any = {
    newPass: 'password',
    confPass: 'password',
  };

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private usersService: UsersService,
    private router: Router,
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private title: Title
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.userId = res.userId;
      this.link = res.token;
      if (this.userId && this.link) {
        this.getUsersData();
      }
    });
    this.title.setTitle('Recover Password | Celebs Worldwide');

  }

  getUsersData() {
    this.expiredLinkErrorMsg = '';
    this.spinner.show();
    this.usersService
      .getUserInfo({ _id: this.userId, forgotLink: this.link })
      .subscribe(
        (data) => {
          if (data.status === 200) {
            this.userInfo = data.data;
            if (!this.userInfo.forgotLink) {
              this.expiredLinkErrorMsg =
                'Forgot Password Link has been expired. Please check link or again you can request for forgot password!';
            }
            this.spinner.hide();
          } else {
            this.spinner.hide();
            this.expiredLinkErrorMsg =
              'Forgot Password Link has been expired. Please check link or again you can request for forgot password!';
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

  recoverPassword() {
    if (!this.userData.password) {
      this.toastr.error('Please enter your password.', 'Error');
      return false;
    } else if (!this.userData.confirmPassword) {
      this.toastr.error('Please enter your confirm password.', 'Error');
      return false;
    } else if (
      this.userData.password !== '' &&
      this.userData.confirmPassword !== '' &&
      this.userData.password !== this.userData.confirmPassword
    ) {
      return false;
    } else if (!this.validPassword) {
      return false;
    }
    const userNewInfo = {
      _id: this.userId,
      forgotLink: '',
      forgotStatus: 0,
      password: this.userData.password,
    };
    this.spinner.show();
    this.usersService.saveInfo(userNewInfo).subscribe(
      (data) => {
        this.spinner.hide();
        if (data.status === 200) {
          this.toastr.success(
            'Your password has been changed successfully. Please login to continue.',
            'Success'
          );
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
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
  AvoidSpace(event?: any) {
    const k = event ? event.which : event.keyCode;
    if (k === 32) {
      return false;
    }
  }
  checkStrongPassword(str: any) {
    if (str) {
      this.validPassword = this.globalService.strongPassword(str);
    } else {
      this.validPassword = true;
    }
  }
  changeTextToPassword(inputText: any, key: any) {
    if (inputText === 'password') {
      this.passwordEncrypt[key] = 'text';
    } else {
      this.passwordEncrypt[key] = 'password';
    }
  }
}
