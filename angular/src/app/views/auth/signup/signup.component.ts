import { Title } from '@angular/platform-browser';
import { CanonicalService } from './../../../shared-ui/services/canonical.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { UsersService, GlobalService, JwtService } from '../../../shared-ui/';
import { AlertService } from '../../../shared-ui/alert/alert.service';
import { CurrentUser } from '../../../layouts/ui/user.model';
import { UserDetails } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  currentUser: CurrentUser = new CurrentUser();
  userDetails: UserDetails = new UserDetails();

  requiredValidate: any = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirm_password: '',
  };
  alreadyEmailValidation: boolean = false;
  alreadyphoneNumberValidation: boolean = false;
  validEmail: boolean = true;
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService,
    private router: Router,
    private jwtService: JwtService,
    private alertService: AlertService,
    private globalService: GlobalService,
    private canonicalService: CanonicalService,
    private title:Title
  ) {
  }

  ngOnInit() {
    this.currentUser = this.jwtService.currentLoggedUserInfo;
    if (this.currentUser && this.currentUser.role) {
      if (this.currentUser.role === environment.userType.admin) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }
    }
    this.title.setTitle('Signup | Celebs Worldwide');
    this.canonicalService.setCanonicalURL('signup');
  }

  doSignup() {
    const objecKeys = Object.keys(this.requiredValidate);
    const self = this;
    const found = objecKeys.filter(function (obj) {
      return !self.userDetails[obj];
    });
    if (
      this.alreadyEmailValidation ||
      !this.validEmail ||
      this.alreadyphoneNumberValidation
    ) {
      return false;
    }
    if (
      this.userDetails.password !== this.userDetails.confirm_password ||
      found.length
    ) {
      this.alertService.error('*Please fill all mandatory fields!');
      setTimeout(() => {
        this.alertService.clear();
      }, 5000);
      return false;
    }

    const value = {
      email: this.userDetails.email,
      firstName: this.userDetails.firstName,
      lastName: this.userDetails.lastName,
      phoneNumber: this.userDetails.phoneNumber,
      matching_passwords: {
        password: this.userDetails.password,
        confirm_password: this.userDetails.confirm_password,
      },
      terms: true,
      role: 'user',
    };
    this.usersService.doSignup(value).subscribe((data) => {
      if (data.status === 200) {
        // this.jwtService.saveCurrentUser(JSON.stringify(data.data));
        this.toastr.success(data.message, 'Success');
        this.router.navigate(['/login']);
      } else {
        this.alertService.error(data.message);
      }
    });
  }

  checkEmailAlreadyExists(email: string) {
    if (this.validEmail) {
      this.alreadyEmailValidation = false;
      const postDataEmail = { email: email, table: 'users' };
      this.usersService.emailAndNumberAlreadyExits(postDataEmail).subscribe(
        (data) => {
          if (data.status === 200 && data.data.length) {
            this.alreadyEmailValidation = true;
          } else {
            this.alreadyEmailValidation = false;
          }
        },
        (error) => {
          this.alreadyEmailValidation = false;
        }
      );
    } else {
      this.alreadyEmailValidation = false;
      return this.validEmail;
    }
  }

  checkNumberAlreadyExists(phoneNumber: number) {
    this.alreadyphoneNumberValidation = false;
    const postDataNumber = { phoneNumber: phoneNumber, table: 'users' };
    this.usersService
      .emailAndNumberAlreadyExits(postDataNumber)
      .subscribe((data) => {
        if (data.status === 200 && data.data.length) {
          this.alreadyphoneNumberValidation = true;
        }
      });
  }
}
