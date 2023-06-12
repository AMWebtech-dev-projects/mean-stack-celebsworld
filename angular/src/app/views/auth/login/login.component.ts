import { Title } from '@angular/platform-browser';
import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GlobalService, JwtService, UsersService } from '../../../shared-ui/';
import { AlertService } from '../../../shared-ui/alert/alert.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  currentUser: any;
  loginInfo: any = {
    email: '',
    password: '',
  };
  validEmail: boolean = true;
  validEmailPassowrd: boolean = true;
  userDetails: FormGroup;
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService,
    private router: Router,
    private jwtService: JwtService,
    private alertService: AlertService,
    private globalService: GlobalService,
    private canonicalService: CanonicalService,
    private title: Title
  ) {
  }
  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' },
    ],
    password: [{ type: 'required', message: 'Password is required' }],
  };

  ngOnInit() {
    this.currentUser = this.jwtService.getCurrentUser();
    if (this.currentUser && this.currentUser.role) {
      if (this.currentUser.role === environment.userType.admin) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }
    }
    this.title.setTitle('Login | Celebs Worldwide');
    this.canonicalService.setCanonicalURL('login');
  }

  doSignin() {
    this.alertService.clear();
    this.usersService.doSignin(this.loginInfo).subscribe(
      (data) => {
        if (data.status === 200) {
          this.jwtService.saveToken(data.token);
          const userDetails = {
            _id: data.data._id,
            firstName: data.data.firstName,
            lastName: data.data.lastName,
            email: data.data.email,
            phoneNumber: data.data.phoneNumber,
            // password: data.data.password,
            role: data.data.role,
          };
          this.jwtService.saveCurrentUser(JSON.stringify(userDetails));

          this.jwtService.getCurrentUser();
          this.globalService.sendActionChildToParent('Loggin');
          if (userDetails && userDetails.role === environment.userType.admin) {
            this.router.navigate(['/dashboard']);
          } else if (this.globalService.bookingUrlState) {
            this.router.navigate([this.globalService.bookingUrlState]);
          } else {
            this.router.navigate(['/home']);
          }
        } else {
          this.toastr.error('Invalid email or password', 'Error');
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

  loginValidation(email: string) {
    this.validEmail = this.globalService.ValidateEmail(email);
  }
}
