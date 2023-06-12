import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { UsersService } from './users.service';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private usersService: UsersService,
    private jwtService: JwtService,
    private router: Router,
    private titleService: Title
  ) {}
  bookingUrlState: string = null;
  private subject = new Subject<any>();

  baseUrl: any = environment.baseUrl;
  getActionChildToParent(): Observable<any> {
    return this.subject.asObservable();
  }
  sendActionChildToParent(action: string) {
    this.subject.next({ text: action });
  }

  getLoadingLabel(): Observable<any> {
    return this.subject.asObservable();
  }
  setLoadingLabel(action: string) {
    this.subject.next({ text: action });
  }
  // public topscroll() {
  //   $('html, body').animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     600
  //   );
  //   this.authentication();
  // }

  // setPageTitle(title: string) {
  //   const pageTitle = title.substr(0,1).toUpperCase();
  //   title = pageTitle + title.substr(1);
  //   this.titleService.setTitle(title  + ' | Celebs Worldwide');
  // }

  authentication() {
    const userInfo = this.jwtService.currentLoggedUserInfo;
    if (userInfo && userInfo.email) {
      const loginInfo = {
        email: userInfo.email,
      };
      this.usersService.authentication(loginInfo).subscribe(
        (data) => {
          if (!data.current_user) {
            this.jwtService.destroyToken();
            this.sendActionChildToParent('Logout');
            this.router.navigate(['login']);
          }
        },
        (error) => {}
      );
    }
  }

  public ValidateEmail(inputText: any) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  localUpload(image: any, folderName: string) {
    const extension = image.name.substring(image.name.lastIndexOf('.'));
    let fileName = image.name.replace(
      image.name.substr(image.name.lastIndexOf('.')),
      ''
    );
    fileName = fileName.replace(/[.]/g, '');
    let newFileName = fileName.replace(/[.\s]/g, '-') + extension;
    newFileName = newFileName + '###' + folderName;
    const formData = new FormData();

    formData.append('image', image, newFileName);
    return this.http.post(this.baseUrl + 'uploadImage', formData);
  }

  RemoveWhiteSpaces(value?: any) {
    if (value) {
      value = value.replace(/[.]/g, '');
      value = value.replace(/[.\s]/g, '-');
      return value;
    } else {
      return false;
    }
  }

  /**
   * Name : strongPassword():
   * Description : This method will call as like global to check strong password.
   * @param is a entered email string.
   * @return it will return true/false.
   */
  public strongPassword(inputText: string) {
    const passwordFormate = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if (passwordFormate.test(inputText)) {
      return true;
    } else {
      return false;
    }
  }
}
